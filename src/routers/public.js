const express = require('express');
const { appendFile } = require('fs');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
    // console.log(req.cookies['indieRushAuth']);
    res.render('index');
})

router.get('/action', (req, res) => {
    res.render('action');
});

router.get('/strategy', (req, res) => {
    res.render('strategy');
});

router.get('/rpg', (req, res) => {
    res.render('rpg');
});

router.get('/news', (req, res) => {
    res.render('news');
});

router.get('/sitemap', (req, res) => {
    res.render('sitemap');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/start', auth, (req, res) => {
    if(req.authPass){
        res.redirect('/profile');
    } else {
        res.render('start');
    }
    
});

router.get('/profile',auth ,(req, res) => {
    if(!req.authPass){
        res.redirect('/start');
    } else {
        res.render('profile');
    }
}); 

router.post('/login', async (req, res) => {
    const loginInput = req.body;
    console.log(loginInput);
    try {
        const foundUser = await User.findByCredential(loginInput.email, loginInput.password);
        const token = await foundUser.generateAuthToken();
        res.cookie('authToken', token, {maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true})
        res.status(200).send();
        console.log(foundUser);
    } catch (e) {
        console.log(e);
    }
})

router.post('/signup', async (req, res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    try {
    const email = newUser.email;
    const foundUser = await User.findOne({ email });
    if(foundUser) throw new Error('This email already taken!');
    
    const token = await newUser.generateAuthToken();  
    const user = await newUser.save({runValidators: true});
    res.cookie('authToken', token, {maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true})
    res.status(200).send();
    console.log(user);
    } catch (e) {
        console.log(e);
    }
});

//find a way to set and get cookie for authentication

module.exports = router;