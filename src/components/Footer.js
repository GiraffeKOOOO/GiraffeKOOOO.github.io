import '../App.css';
import logo from '../logo.svg';
import { Github, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <>
      <div className='grid grid-cols-4 gap-2 footer-bg-gray pt-2 pb-3 text-center'>
        {/** left side - react */}
        <span className='flex'>
          <img src={logo} className="App-logo" alt="logo" />
          <p className='mt-auto mb-auto text-slate-400'>Portfolio page made using React</p>
        </span>

        {/** middle side - navigation links */}
        <div className='col-span-2 mt-auto mb-auto'>
          <a 
            href='/'
            rel='noreferrer noopener'
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            Home
          </a>
          <a 
            href='/projects'
            rel='noreferrer noopener'
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            Projects
          </a>
          <a 
            href='/experience'
            rel='noreferrer noopener'
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            Experience
          </a>
          <a 
            href='/academia'
            rel='noreferrer noopener'
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            Academia
          </a>
          <a 
            href='https://drive.google.com/file/d/1E-Vi6ciNGEHqfG2v-VfCsra8smiK-tBQ/view?usp=sharing'
            rel='noreferrer noopener'
            target="_blank"
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            CV
          </a>
          <a 
            href='/contact'
            rel='noreferrer noopener'
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            Contact
          </a>
          <a 
            href='/about'
            rel='noreferrer noopener'
            className='no-underline pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            About
          </a>
        </div>

        {/** right side - socials */}
        <span className='flex mt-auto mb-auto'>
          <a 
            href='https://github.com/GiraffeKOOOO'
            target='_blank'
            rel='noreferrer noopener'
            className='pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            <Github size={32}/>
          </a>
          <a 
            href='https://www.linkedin.com/in/paskal-stepien-432161174/'
            target='_blank'
            rel='noreferrer noopener'
            className='pl-2 pr-2 text-slate-400 hover:text-slate-100'
          >
            <Linkedin size={32}/>
          </a>
        </span>

      </div>
    </>
  );
}

export default Footer;