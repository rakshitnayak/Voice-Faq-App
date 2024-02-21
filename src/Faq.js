import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import FAQ_LIST from './Faq.json';

export const Faq = ({ index, setIndex }) => {
  return (
    <Flex direction="column" p="4">
      <Box mb="8">
        <Heading size="md">Frequently asked questions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {FAQ_LIST.map(faq => (
          <AccordionItem key={faq.id} name={`accordian-item-${faq.id}`}>
            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">{faq.question}</Text>
              </Box>
            </AccordionButton>

            <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
