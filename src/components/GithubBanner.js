import '../App.css';
import Card from 'react-bootstrap/Card';
import GithubBannerImage from '../media/github-banner-white.png';

function GithubBanner() {
  return (
    <> 
        <a
            href='https://github.com/GiraffeKOOOO'
            target='_blank'
            rel='noreferrer noopener'
            className='no-underline text-white'
        >
            <Card>
                <Card.Body className='p-2 h-[100px] bg-gray-800 hover:bg-gray-700'>
                    <div className='flex flex-row'>
                        <img className='w-[85px] h-[85px] rounded-full border-2 border-gray-350' src='https://avatars.githubusercontent.com/u/33908517?v=4' alt='github-profile'/>
                        <div className='flex-1 ml-5 my-2'>
                            <p className='text-[25px] m-0'>Paskal Stepien</p>
                            <p className='text-lg m-0'>Github: GiraffeKOOOO</p>
                        </div>
                        <img className='w-30 h-[116px] p-0 m-0 relative top-[-16px] left-[45px]' src={GithubBannerImage} alt='github-corner'/>
                    </div>
                </Card.Body>
            </Card>
        </a>  
    </>
  )
}

export default GithubBanner;