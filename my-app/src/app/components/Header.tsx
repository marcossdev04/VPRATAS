'use client'
import Image from "next/image";
import logoImage from "@/app/assets/V (3).svg"
import TextField from "@mui/material/TextField";
import { FaSearch } from "react-icons/fa"; // Adicionado o ícone de pesquisa
import { FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { AppBar, Box, Toolbar } from "@mui/material";
import Link from "next/link";


export function Header() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '10ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <div className=" flex bg-black w-full border-b justify-between px-10 ">
            <div className="flex justify-center items-center mobile:hidden w-1/3">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar className="bg-black">
                            <Search>
                                <SearchIconWrapper>
                                    <FaSearch />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Pesquisar"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <div className="desktop:hidden tablet:hidden laptop:hidden">
                /
            </div>
            <div className="flex pt-2 justify-center mobile:w-1/3 w-1/3">
                <Link href={'/'}>
                    <Image src={logoImage} alt="logo pratas 925" width={70} />
                </Link>
            </div>
            <div className="items-center mobile:mr-3 flex justify-end w-1/3">
                <ul className="flex gap-7 items-center">
                    <div className="mobile:hidden">
                        <li><FaRegUser size={22} /></li>
                    </div>
                    <div className="flex gap-2 items-center">
                        <li><IoMdCart size={27} /></li>
                        <span className="font-medium">R$00.00</span>
                    </div>
                </ul>
            </div>
        </div>
    )
}