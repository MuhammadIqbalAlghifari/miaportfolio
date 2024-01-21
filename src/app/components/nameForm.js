"use client"
import { Button, Fade, Input } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '../../../context/user';

const NameForm = () => {
    const { userName, setUserName } = useUser();
    const [ isButtonVisible, setButtonVisible ] = useState(false);

    const handleInput = (event) => {
        setUserName(event.target.value);
        setButtonVisible(event.target.value.trim() !== '')
    };

    return (
        <form className="flex flex-col justify-center items-center gap-4">
            <Input
                onChange={handleInput}
                color='white'
                textAlign='center'
                value={userName}
                focusBorderColor='#00da8e'
                variant='flushed'
                placeholder='Insert Your Name'
                w={300}            
                />

            <Fade in={isButtonVisible}>
                <Link href='/Home'>
                    <Button _hover={{color: 'white', backgroundColor: '#00da8e'}}>See My Portfolio</Button>
                </Link>
            </Fade>
        </form>
    );
};

export default NameForm;


