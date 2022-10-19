import '../App.css';
import { Book, Briefcase, Envelope, FileEarmarkText, JournalCode, PersonCircle, QuestionCircle } from 'react-bootstrap-icons';

function NavigationButton(props) {

    function IconSwitch(buttonName) {
        switch(buttonName) {
            case "Projects":
                return <JournalCode size={window.innerWidth < 1024? 80 : 100}/>
            case "Work Experience":
                return <Briefcase size={window.innerWidth < 1024? 80 : 100}/>
            case "Academia":
                return <Book size={window.innerWidth < 1024? 80 : 100}/>
            case "CV":
                return <FileEarmarkText size={window.innerWidth < 1024? 80 : 100}/>
            case "Contact Me":
                return <Envelope size={window.innerWidth < 1024? 80 : 100}/>
            case "About Me":
                return <PersonCircle size={window.innerWidth < 1024? 80 : 100}/>
            default:
                return <QuestionCircle />
        }
    }

    function HrefSwitch(buttonName) {
        switch(buttonName) {
            case "Projects":
                return '/projects'
            case "Work Experience":
                return '/experience'
            case "Academia":
                return '/academia'
            case "CV":
                return 'https://drive.google.com/file/d/1oF8Wgf_10Shti79L1rb5jOjVFJvNj5sT/view?usp=sharing'
            case "Contact Me":
                return '/contact'
            case "About Me":
                return '/about'
            default:
                return '/'
        }
    }

  return (
    <>
        <a 
            className="grid grid-cols-3 gap-1 no-underline text-white border rounded-[15px] hover:bg-cyan-900"
            href={HrefSwitch(props.name)} 
            rel='noreferrer noopener'
            target={props.name === 'CV' ? '_blank': ''}
        >
            <div className='ml-auto mr-auto mt-2 mb-2'>{IconSwitch(props.name)}</div>
            <div className='col-span-2 text-3xl mt-auto mb-4'>{props.name}</div>
        </a>
    </>
  );
}

export default NavigationButton;