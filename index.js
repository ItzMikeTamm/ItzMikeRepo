let express = require('express')
let router = express. Router()

/* get home page. */
router.get('/', function (req, res, next) { 
    res.render('index', { title: 'Home' });
})
    /* get home page. */

router.get('/home', function (req, res, next) { 
    res.render('index', { title: 'Home' });
})

/*get About me page. */
router.get('/aboutme', function (req, res, next) 
{ res.render('aboutme', { title: 'About Me' })
})
/* get Projects page. */
router.get('/projects', function (req, res, next) 
{ res.render('projects', { title: 'Projects' });
})
/* get Services */
router.get('/services', function (req, res, next) 
{ res.render('services', { title: 'Services' });
})
/* get Contact me page. */
router.get('/contactme', function (req, res, next) { 
res.render('contact', { title: 'Contact Me' });
})
module.exports - router