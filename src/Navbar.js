import React from 'react';
import { Box, Link, Text, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Navbar = ({ toggleColorFlag }) => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="lg">E commerce Support</Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Text>
          Made By
          <Link p="1" color="teal.500" href="https://github.com/rakshitnayak">
            Rakshit
          </Link>
        </Text>
      </Box>
      <Spacer />
      <Box p="2">
        <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
      </Box>
    </Flex>
  );
};
