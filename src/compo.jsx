
import Slide from './slide.jsx'

const datavalue = [
    {
        icon: "fa-brands fa-windows",
        sub: 'Fully Responsive',
        descri: 'This theme will look great on any device, no matter the size!',
    },
    {
        icon: "fa-solid fa-layer-group",
        sub: 'Bootstrap 5 Ready',
        descri: 'Featuring the latest build of the new Bootstrap 5 framework!',
    },
    {
        icon: "fa-solid fa-terminal",
        sub: 'Easy to Use',
        descri: 'Ready to use with your own content, or customize the source files!',
    },
];

const mixeddata = [
    {
        index: '1',
        image: "https://upload.wikimedia.org/wikipedia/commons/7/78/IPhone_7_Plus_Black_dual_camera_back.jpg",
        head: 'Fully Responsive Design',
        subj: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
        index: '2',
        image: "https://www.webfx.com/wp-content/uploads/2021/10/sai-kiran-anagani-61187-unsplash-1024x683.jpg",
        head: 'Updated For Bootstrap 5',
        subj: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
        index: '3',
        image: "https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?size=626&ext=jpg&ga=GA1.1.2072234812.1714939537&semt=ais",
        head: 'Easy to Use & Customize',
        subj: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
];


const profile = [
    {
        pro: 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg',
        name: 'Margaret E',
        feed: "'This is fantastic! Thanks so much guys!'",
    },
    {
        pro: 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg',
        name: 'Fred S',
        feed: "'Bootstrap is amazing. I've been using it to create lots of super nice landing pages.'",
    },
    {
        pro: 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg',
        name: 'Sarah W.',
        feed: "'Thanks so much for making these free resources available to us!'",
    },
];

const Icodis = () => {
    return (
        <div>
            <nav>
                <div className="header">
                    <h3 style={{ float: 'left', fontFamily: 'Raleway' }}>{'Start Bootstrap'}</h3>
                    <button style={{ float: 'right' }}>{'Sign Up'}</button>
                </div>
            </nav>
            <div className='form' >
                <div className="inside">
                    <h1 style={{ color: 'white', textAlign: 'center' }}>{'Generate more leads with a professional landing page!'}</h1>
                    <form >
                        <input className='inp' type="text" placeholder="Email Address" required></input>
                        <button style={{ margin: '5px', padding: '20px', fontSize: '20px', }}>{'Submit'}</button>
                    </form>
                    <h6>{'Email Address is required.'}</h6>
                    <h6>{'Email Address Email is not valid.'}</h6>
                </div>
            </div>
            <div
                style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                {
                    datavalue.map((val) => (
                        <div key={val.sub}
                            style={{ border: 'none', margin: '15px 50px 15px 50px', padding: '50px', textAlign: 'center' }}
                        >
                            <i style={{ fontSize: '40px', color: 'rgb(96, 96, 251)' }} className={val.icon}></i>
                            <h1>{val.sub}</h1>
                            <h3>{val.descri}</h3>
                        </div>
                    ))};

            </div>
            <div className="con">
            {

                mixeddata.map((value) => (
            <Slide key={value.head} index ={value.index} image ={value.image} head = {value.head} subj = {value.subj} />
                ))
            };
            </div>
            <h1 style={{ padding: '20px', margin: '0', textAlign: 'center' }}>{'What people are saying...'}</h1>
            <div
                style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                {
                    profile.map((val) => (
                        <div key={val.name}
                            style={{ border: 'none', margin: '20px 100px 20px 100px', padding: '10px', textAlign: 'center' }}
                        >
                            <img style={{ borderRadius: '50%', height: '180px', width: '220px' }} src={val.pro} />
                            <h2>{val.name}</h2>
                            <h4>{val.feed}</h4>
                        </div>
                    ))
                };
            </div>
            <div className='form' style={{
                paddingTop: '20px',
                paddingBottom: '20px'
            }}>
                <div className="inside" style={{ fontSize: '15px' }}>
                    <h1 style={{ color: 'white', textAlign: 'center' }}>{'Ready to get started? Sign up now!'}</h1>
                    <form >
                        <input className='inp' type="text" placeholder="Email Address"></input>
                        <button style={{ margin: '5px', padding: '20px', fontSize: '20px', }}>{'Submit'}</button>
                    </form>
                </div>
            </div>
            <nav>
                <div className="footer"
                    style={{ fontFamily: 'Raleway' }}>
                    <ul>
                        <li><a href="#home">{'About'}</a></li>
                        <li><a href="#home">{'Contact'}</a></li>
                        <li><a href="#home">{'Term of Use'}</a></li>
                        <li><a href="#home">{'Privacy Policy'}</a></li>
                        <i style={{ float: 'right' }} className="fa-brands fa-instagram"></i>
                        <i style={{ float: 'right' }} className="fa-brands fa-twitter"></i>
                        <i style={{ float: 'right' }} className="fa-brands fa-facebook"></i>
                    </ul>
                    <p style={{ margin: '10px 50px' }}>{'© Your Website 2023. All Rights Reserved.'}</p>
                </div>
            </nav>
        </div>

    )
};

export default Icodis
