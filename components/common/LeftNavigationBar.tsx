import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { BiNews, BiMessage, BiSmile, BiLogOutCircle, BiStar } from "react-icons/bi";

/*
    The common left navigation bar used across pages
*/
type LeftNavigationBarProps = {
    tabIndex: number;
  };

const LeftNavigationBar = (tabIndex: LeftNavigationBarProps) => {



    const { logOut } = useAuth();
    const router = useRouter();

    
    return (
        <div className="w-1/4 flex flex-col justify-between bg-neutral-color-300 p-16 fixed top-0 left-0 bottom-0 overflow-y-auto">
            {/* Logo Bar */}
            <div className="flex-none flex flex-col justify-center items-center text-center">
                        {/* First Row */}
                        <div className="flex items-center">
                            {/* Image */}
                            <img src="/assets/finterest-logo.png" alt="Finterest Logo" className="w-7 h-10 m-2" />
                            {/* Title */}
                            <h2 className="font-gupter text-neutral-headings-black font-bold text-4xl ml-2">Finterest</h2>
                        </div>

                        {/* Second Row */}
                        <div className="mt-2 pt-2">
                            {/* Subtitle */}
                            <h6 className="text-sm text-neutral-text-gray uppercase">Where wisdom meets wealth</h6>
                        </div>
                    </div>

                    {/* Options */}
                    <div className="flex-grow flex justify-center items-center">
                        <div className="flex-col justify-center items-start space-y-8">
       
                            <NextLink href={'/'} className="flex justify-center items-center">
                                <BiNews className='text-3xl cursor-pointer text-neutral-headings-black m-2' />
                                <h5 className={`font-dmsans text-neutral-headings-black text-xl ml-2 ${tabIndex.tabIndex === 0 ? 'font-bold' : ''}`}>News</h5> 
                            </NextLink>  
                        
                               
                            <NextLink href={'/chatwithai'} className="flex justify-center items-center">
                                <BiMessage className='text-3xl cursor-pointer text-neutral-headings-black m-2' />
                                <h5 className={`font-dmsans text-neutral-headings-black text-xl ml-2 ${tabIndex.tabIndex === 1 ? 'font-bold' : ''}`}>AI Chat</h5>
                            </NextLink>

                            <NextLink href={'/'} className="flex justify-center items-center">
                                <BiSmile className='text-3xl cursor-pointer text-neutral-headings-black m-2' />
                                <h5 className={`font-dmsans text-neutral-headings-black text-xl ml-2 ${tabIndex.tabIndex === 2 ? 'font-bold' : ''}`}>Profile</h5>
                            </NextLink>

                           
                            <NextLink href={''} className="flex justify-center items-center">
                                <button onClick={
                                        () => { logOut();
                                        router.push('/');
                                        }}
                                
                                    className="bg-transparent text-neutral-headings-black hover:text-neutral-text-gray py-2 px-8 rounded-full flex items-center">
                                    <BiLogOutCircle className='text-3xl cursor-pointer m-2' />
                                    <span className="font-dmsans text-xl ml-2">Logout</span>
                                </button>
                            </NextLink>

                            <div className="flex justify-center items-center">
                                <button className="bg-neutral-headings-black hover:bg-neutral-text-gray text-white font-semibold py-2 px-8 rounded-full flex items-center mt-5">
                                    <BiStar className='text-3xl cursor-pointer text-white m-2' />
                                    <span className="mr-2">Upgrade</span>
                                </button> 
                            </div>
                        </div>
                    </div>
                    <div className="flex-none flex justify-center items-center">
                    <h6 className="text-sm text-neutral-text-gray uppercase">Copyright 2023</h6>
                    </div>



        </div>
                                                 
    );
};

export default LeftNavigationBar;


