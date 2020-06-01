var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const request = require('request');
//Google Sheets API
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('../client_secret.json');
// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1qko2VUBdExnP4bWy3A9KBWlJWZ4pF1Y_-YrLrLNmWnk');



//Home Page
router.get('/', (req, res, next) => {
    return res.render('./index/new', { whiteText: 1 });
});

router.get('/rules', (req, res, next) => {
    return res.render('./index/rules');
});

router.get('/register', (req, res, next) => {
    return res.render('./index/over');
});

router.get('/arhaanb', (req, res, next) => {
    return res.render('./index/register');
});

router.post('/register', (req, res) => {
    async function sendConfirm() {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL, // Your email id
                pass: process.env.PASSWORD // Your password
            }
        });

        transporter.use('compile', hbs({
            viewEngine: {
                extName: '.hbs',
                partialsDir: './views/',
                layoutsDir: './views/',
                defaultLayout: 'email.hbs',
            },
            viewPath: './views/',
            extName: '.hbs'
        }))

        var text = "thank you for registering.";

        var mailOptions = await {
            from: 'process.env.EMAIL', // sender address
            to: req.body.p1Email + ', ' + req.body.p2Email + ', ' + req.body.p3Email, // list of receivers - email used as input (for confirmation)
            subject: 'Registration for Enigma 2020 Confirmed', // Subject line
            //text: text // plaintext body
            template: 'email',
            context: {
                //Add variables to send to html template
                p1Namebro: req.body.p1Name,
                teamName: req.body.teamName,
                p2Namebro: req.body.p2Name,
                p3Namebro: req.body.p3Name,
            }
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.redirect('/error');
            } else {
                console.log("mail Sent");
                return res.render('./index/success');
            };
        });
    }


    //Send data to spreadsheet
    // Authenticate with the Google Spreadsheets API.

    request('https://random-word-api.herokuapp.com/word', { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body[0]);
        var ranWord = body[0]
        var usernameExc = req.body.teamName.toLowerCase().split(" ").join("");
        doc.useServiceAccountAuth(creds, function (err) {
            // add rows 
            doc.addRow(1, {
                team_name: req.body.teamName,
                p1_name: req.body.p1Name,
                p1_email: req.body.p1Email,
                p1_phone: req.body.p1Phone,
                p2_name: req.body.p2Name,
                p2_email: req.body.p2Email,
                p2_phone: req.body.p2Phone,
                p3_name: req.body.p3Name,
                p3_email: req.body.p3Email,
                p3_phone: req.body.p3Phone,
                p1_class: req.body.p1Class,
                p2_class: req.body.p2Class,
                p3_class: req.body.p3Class,
                p1_section: req.body.p1Section,
                p2_section: req.body.p2Section,
                p3_section: req.body.p3Section,
                password: ranWord,
                username: usernameExc
            }, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
        sendConfirm()
    });
    //return res.render('./index/success')
});


router.get('/members', (req, res, next) => {
    return res.render('./index/members');
});

router.get('/new', (req, res, next) => {
    return res.render('./index/index');
});

router.get('/enigma', (req, res, next) => {
    return res.redirect('https://enigma.teamimpulse.co.in');
});

module.exports = router;
