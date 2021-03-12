import React from 'react'
import './Footer.scss'

import { Link } from '../../atoms/Link/Link'
import { Icon } from '../../atoms/Icon/Icon'

const Footer = (props) => {
    // const { icons } = socialIcons;
    // console.log(socialIcons)
    return (
        <footer className="c-footer" {...props}>
            <Link href={props.href} className='footer__link'>hello@jane.dev</Link>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="http://dribbble.com">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>


            {/* <ul className='social-list'>
                {props.icons && props.icons.map(function (icon) {
                    console.log(props.icons)
                    return (
                        <li className='social-list__item'>
                            <Link className='social-list__link'>
                                <Icon
                                    key={icon.id}
                                    // className="fab fa-github"
                                    className={`fab fa-${icon.src}`}
                                // src={icon.src}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul> */}
        </footer>
    )
}

export default Footer

Footer.defaultProps = {
    href: 'mailto:hello@jane.dev',
    // linkclass: 'footer__link',
    // linktext: 'hello@jane.dev',
    icons: [
        {
            id: 1,
            src: 'facebook'
        },
        {
            id: 2,
            src: 'twitter'
        }
        // {
        //     'src': instagram
        // },
        // {
        //     'src': pinterest
        // }
    ]
};

// export const socialIcons = [
//     {
//         'src': facebook
//     },
//     {
//         'src': twitter
//     },
//     {
//         'src': instagram
//     },
//     {
//         'src': pinterest
//     }
// ];

