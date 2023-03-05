import React from 'react';
import classes from "./Footer.module.css"
function Footer(props) {
    return (
        <div className={classes.footer}>
            <div className={classes['footer-list']}>
                <p className={classes['footer-item']}>
                    FAQ
                </p>
                <p className={classes['footer-item']}>
                    Investor Relations
                </p>
                <p className={classes['footer-item']}>
                    Ways to Watch
                </p>
                <p className={classes['footer-item']}>
                    Corporate Information
                </p>
                <p className={classes['footer-item']}>
                    Netflix Originals
                </p>
            </div>
            <div className={classes['footer-list']}>
                 <p className={classes['footer-item']}>
                    Help Center
                </p>
                <p className={classes['footer-item']}>
                    Jobs
                </p>
                <p className={classes['footer-item']}>
                    Terms of Use
                </p>
                <p className={classes['footer-item']}>
                    Contact Us
                </p>
            </div>
            <div className={classes['footer-list']}>
                <p className={classes['footer-item']}>
                    Account
                </p>
                <p className={classes['footer-item']}>
                    Radeem Gift Cards
                </p>
                <p className={classes['footer-item']}>
                    Privacy
                </p>
                <p className={classes['footer-item']}>
                    Speed Test
                </p>
            </div>
            <div className={classes['footer-list']}>
                <p className={classes['footer-item']}>
                    Media Center
                </p>
                <p className={classes['footer-item']}>
                    Buy Gift Cards
                </p>
                <p className={classes['footer-item']}>
                    Cookies Reference
                </p>
                <p className={classes['footer-item']}>
                    Legal Notice
                </p>
            </div>
        </div>
    );
}

export default Footer;