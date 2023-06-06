import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterLink,
  GradientBackgroundCon,
  FooterCon,
  RedSpan,
  QuoteGeneratorContainer,
  QuoteGeneratorInnerContainer,
  QuoteGeneratorTitle,
  QuoteGeneratorSubtitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from '@/components/QuoteGenerator/QuoteGeneratorElements';

import clouds1 from '../assets/cloudy-weather.png';
import clouds2 from '../assets/cloud-and-thunder.png';

import { useState } from 'react';

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Next Aws Tuto</title>
        <meta name="description" content="No idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* BACKGROUND */}
      <GradientBackgroundCon>
        {/* QuoteGeneratorModal  */}
        {/* QuoteGenerator */}

        <QuoteGeneratorContainer>
          <QuoteGeneratorInnerContainer>
            <QuoteGeneratorTitle>Quote Generator</QuoteGeneratorTitle>
            <QuoteGeneratorSubtitle>
              bla bla bla from{' '}
              <FooterLink
                href="https://zenquotes.io"
                target="_blank"
                rel="noreferrer noopener"
              >
                {' '}
                ZEN Quotes API{' '}
              </FooterLink>
            </QuoteGeneratorSubtitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={() => {}}>
                Generate Quote!
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorContainer>

        <BackgroundImage1
          src={clouds1}
          alt="clouds"
          height="300"
          priority={true}
        />
        <BackgroundImage2 src={clouds2} alt="clouds" height="300" />

        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan> ♡ </RedSpan> by{' '}
            <FooterLink href="" target="_blank" rel="noopener noreferrer">
              {' '}
              Someone here{' '}
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
