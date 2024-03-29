/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

'use client';

import React from 'react';
import Link from 'next/link';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'; // 홈 아이콘
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'; // 플리 아이콘
import EditNoteIcon from '@mui/icons-material/EditNote'; // 나만의 음악 등록 아이콘
import PersonIcon from '@mui/icons-material/Person'; // 프로필 아이콘
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'; // 로그아웃 아이콘
import { createTheme } from '@mui/material/styles';

// 각각의 컴포넌트에 대한 타입 선언
type HomeProps = {
  children: React.ReactNode;
};

type PlaylistProps = {
  title: string;
  songs: string[];
  children?: React.ReactNode;
};

type MymusicProps = {
  children: React.ReactNode;
};

type UserProfileProps = {
  children: React.ReactNode;
};

type LogOutProps = {
  children: React.ReactNode;
};

// MUI 색상 커스텀
const theme = createTheme({
  palette: {
    primary: {
      // style={{ color: theme.palette.primary.main }} 식으로 작성했음
      main: '#6C26FF',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  marginBottom: theme.spacing(5),
  width: '100%',
  height: '40px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export function SearchAppBar() {
  return (
    <>
      {/* <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      /> */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <InputBase
          placeholder="검색"
          inputProps={{ 'aria-label': 'search' }}
          className="ml-10 h-full text-sm text-white"
        />
      </Search>
    </>
  );
}

// 각각의 컴포넌트 구현
const Home: React.FC<HomeProps> = ({ children }) => <div>{children}</div>;

const Playlist: React.FC<PlaylistProps> = ({ children }) => (
  <div>{children}</div>
);

const Mymusic: React.FC<MymusicProps> = ({ children }) => <div>{children}</div>;

const UserProfile: React.FC<UserProfileProps> = ({ children }) => (
  <div>{children}</div>
);

const LogOut: React.FC<LogOutProps> = ({ children }) => <div>{children}</div>;

const NavBar: React.FC = () => (
  <div className="fixed flex flex-col justify-start left-0 top-0 h-full w-[15%] bg-zinc-900 text-white p-4">
    <Link className="flex flex-col cursor-pointer" href={'/main'}>
      <div className="flex items-center mt-5">
        <img
          src="https://i.ibb.co/1GnSm8z/Dream-Vault-Png.png"
          alt="DreamVault-logo-img"
          className="w-12"
        />
        <h2 className="p-3 text-2xl font-bold">DreamVault</h2>
      </div>
    </Link>

    <div className="flex flex-col mt-12 h-full">
      <SearchAppBar />
      <div className="flex mb-5 items-center rounded-lg hover-bg-opacity cursor-pointer">
        <Home>
          <HomeIcon style={{ color: theme.palette.primary.main }} />
          <button className="p-2 text-sm">홈</button>
        </Home>
      </div>

      <Link
        className="flex mb-5 items-center rounded-lg hover-bg-opacity cursor-pointer"
        href={'/playlist'}
      >
        <Playlist
          title="내 플레이리스트"
          songs={['노래 1', '노래 2', '노래 3']}
        >
          <PlaylistPlayIcon style={{ color: theme.palette.primary.main }} />
          <button className="p-2 text-sm">플레이리스트</button>
        </Playlist>
      </Link>

      <Link href={'/MymusicAI'}>
        <div className="flex mb-5 items-center rounded-lg hover-bg-opacity cursor-pointer">
          <Mymusic>
            <EditNoteIcon style={{ color: theme.palette.primary.main }} />
            <button className="p-2 text-sm">나만의 음악</button>
          </Mymusic>
        </div>
      </Link>

      <div className="flex mb-5 items-center rounded-lg hover-bg-opacity cursor-pointer">
        <PersonIcon style={{ color: theme.palette.primary.main }} />
        <UserProfile>
          <button className="p-2 text-sm">
            <Link href={'/mypage'}>프로필</Link>
          </button>
        </UserProfile>
      </div>

      <div className="flex items-center rounded-lg hover-bg-opacity cursor-pointer">
        <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
        <UserProfile>
          <button className="p-2 text-sm">
            <Link href={'/musicpage'}>음악 상세페이지 (임시)</Link>
          </button>
        </UserProfile>
      </div>

      <div className="flex items-center rounded-lg hover-bg-opacity cursor-pointer">
        <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
        <UserProfile>
          <button className="p-2 text-sm">
            <Link href={'/search'}>검색 결과페이지 (임시)</Link>
          </button>
        </UserProfile>
      </div>
    </div>

    <div className="flex flex-col my-4">
      <div className="flex items-center text-sm rounded-lg hover-bg-opacity">
        <LogOut>
          <MeetingRoomIcon style={{ color: theme.palette.primary.main }} />
          <button className="p-2 text-sx">로그아웃</button>
        </LogOut>
      </div>
    </div>
  </div>
);

export default NavBar;
