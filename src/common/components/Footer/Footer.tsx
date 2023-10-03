import s from './Footer.module.css'
import instLogo from './../../images/Instagram_logo.png'
import fb_logo from './../../images/facebook_logo1.png'

export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.infoBlock}>
                <p className={s.description}>All rights reserved. 2023</p>
                <div className={s.linkBlock}>
                    <a href={'https://www.instagram.com/pivniy_zhyvit/'} target={'_blank'}><img className={s.instLogo}
                                                                                                title={'Instagram'}
                                                                                                src={instLogo}
                                                                                                alt={'logo'}/></a>
                    <a href={'https://www.facebook.com/people/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9-%D0%96%D0%B8%D0%B2%D1%96%D1%82/100063921219625/'}
                       target={'_blank'}>
                        <img title={'Facebook'} className={s.instLogo} src={fb_logo} alt={'facebook'}/>
                    </a>
                </div>
                <p className={s.description}>Written by <a href={'https://www.linkedin.com/in/vadimcrmnl1/'}
                                                           target={'_blank'}>Vadzim
                    Karpenka</a>
                </p>
            </div>

        </div>
    )
}