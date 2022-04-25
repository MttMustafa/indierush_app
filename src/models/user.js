const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordStrength } = require('check-password-strength');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid email!');
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(passwordStrength(value).value === 'Too weak'){
                throw new Error('Please choose a stronger password!');
            }
        }
    },
    name: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(!value.match(/^[a-zA-Z]*$/g)){
                throw new Error('Name can only contain letters!');
            }
        }
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(!value.match(/^[a-zA-Z]*$/g)){
                throw new Error('Lastname can only contain letters!');
            }
        }
    },
    avatar: {
        type: Buffer
    },
    authTokens: [{
        token: {
            type: String
        }
    }]
});

UserSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
        next();
    }
});

UserSchema.methods.generateAuthToken = async function(){
    
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_KEY, { expiresIn: '1 week'});
    user.authTokens = user.authTokens.concat({ token });
    await user.save();
    
    return token;
}

UserSchema.statics.findByCredential = async function(email, password) {
    
    const foundUser = await User.findOne({ email });
    if(!foundUser) throw new Error('Wrong email or password!');
    const isMatch = await bcrypt.compare( password, foundUser.password );
    if(!isMatch) throw new Error('Wrong email or password!');

    return foundUser;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;