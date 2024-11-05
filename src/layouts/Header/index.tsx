import React from 'react';
import './header.css';
import { headerTabs } from './common/headerTabs';
import { Container, Tabs, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { HeaderProfile } from './common/headerProfile';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <Container className='headerContainer'>
        <Tabs
          onChange={(value) => {
            if (value) navigate(value);
          }}
          variant='unstyled'
          className='headerTabs'
        >
          <Tabs.List>
            {headerTabs.map((tab) => {
              return (
                <>
                  <Tabs.Tab
                    key={tab.key}
                    value={tab.ref}
                    leftSection={<img src={tab.icon} alt='' />}
                    className='tab'
                  >
                    {tab.label}
                  </Tabs.Tab>
                  {/* <Box
                    className='absolute left-0 bottom-0 w-full h-[4px] bg-transparent group-hover:bg-transparent group-hover:bg-no-repeat group-hover:bg-bottom group-hover:bg-cover transition-all duration-300'
                    style={{
                      backgroundImage: `url()`,
                    }}
                  /> */}
                </>
              );
            })}
          </Tabs.List>
        </Tabs>
        <Box className='headerProfile'>
          {HeaderProfile.map((profile) => (
            <Box component='img' src={profile.icon} alt='' key={profile.key} />
          ))}
        </Box>
      </Container>
      <Box
        component='img'
        src='/images/webImages/header-cloud.webp'
        className='headerCloud'
      />
    </header>
  );
};

export default Header;
