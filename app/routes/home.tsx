import { TypographyH1 } from '@/components/typography/typography-H1';
import { TypographyP } from '@/components/typography/typography-P';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  FacebookIcon,
  GitlabIcon,
  InstagramIcon,
  PlayCircle,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import type { Route } from './+types/home';

// eslint-disable-next-line
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <main className={'container max-w-[85em] mx-auto w-full px-4 2xl:px-0'}>
      <section>
        <Card
          className={'gap-4 bg-transparent border-0 shadow-none rounded-none'}>
          <CardHeader>
            <CardTitle>
              <TypographyH1>
                <span>Transform Your</span>{' '}
                <span className={'text-primary'}>Online Business</span>{' '}
                <span>with DynaCode</span>
              </TypographyH1>
            </CardTitle>
          </CardHeader>
          <CardContent className={'grid grid-cols-3 gap-4'}>
            <div
              className={
                'order-2 md:order-1 col-span-full md:col-span-1 flex items-center gap-2'
              }>
              {Array.from({ length: 4 }).map(() => (
                <div
                  key={crypto.randomUUID()}
                  className={
                    'rounded-full outline-2 p-0.5 outline-primary outline-double'
                  }>
                  <img
                    src='/react.svg'
                    alt='client-avatar'
                    width={100}
                    height={100}
                    className={'w-full h-full object-cover'}
                  />
                </div>
              ))}

              <p>
                <span className={'text-lg font-bold block'}>1500+</span>
                <span className={'font-medium text-sm text-primary block'}>
                  Trusted Clients
                </span>
              </p>
            </div>
            <div className={'order-1 md:order-2 col-span-full md:col-span-2'}>
              <TypographyP>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, dolorum. Sunt quae, quasi itaque vero natus
                repudiandae laborum est maxime quia, voluptatem doloribus in
                harum nam nulla quis neque magnam.
              </TypographyP>
            </div>
          </CardContent>
        </Card>

        <Card
          className={
            'relative aspect-square sm:aspect-22/9 md:aspect-26/9 lg:aspect-30/9 w-full h-full'
          }>
          <HeroBGCover />

          <CardContent
            className={
              'flex flex-col items-center justify-between w-full h-full'
            }>
            <div className={'flex items-center gap-4 flex-wrap'}>
              {[
                'On-Page SEO',
                'Digital Marketing',
                'Off-Page SEO',
                'Social Media Marketing',
                'Analytic and Reporting',
                'Influencer Marketing',
              ].map((tag) => (
                <Badge
                  variant={'secondary'}
                  className={'md:text-base lg:text-lg font-medium'}>
                  {tag}
                </Badge>
              ))}
            </div>

            <div className={'flex items-center justify-between w-full'}>
              <div>
                <Button className={'rounded-full'}>View Portfolios</Button>
              </div>

              <div
                className={
                  'col-span-auto justify-self-end self-center content-center bg-primary/70 p-2 animate-pulse rounded-full'
                }>
                <span className={'bg-primary/90 p-0.5 block rounded-full'}>
                  <PlayCircle
                    className={
                      'size-12 md:size-16 lg:size-20 stroke-1 stroke-accent-foreground/50'
                    }
                  />
                  {/* <TooltipProvider>
                    <Tooltip>
                      <TooltipContent>Play Video</TooltipContent>
                      <TooltipTrigger>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider> */}
                </span>
              </div>
            </div>
          </CardContent>

          <CardFooter className={'flex items-center gap-4'}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className={'bg-accent rounded-full'}>
                    <FacebookIcon
                      className={'size-6 stroke-1 stroke-primary'}
                    />
                  </span>
                </TooltipTrigger>
                <TooltipContent>Connet with Facebook</TooltipContent>
              </Tooltip>
              <span className={'p-1 bg-accent rounded-full'}>
                <TwitterIcon className={'size-6 stroke-1 stroke-primary'} />
              </span>
              <span className={'p-1 bg-accent rounded-full'}>
                <InstagramIcon className={'size-6 stroke-1 stroke-primary'} />
              </span>
              <span className={'p-1 bg-accent rounded-full'}>
                <GitlabIcon className={'size-6 stroke-1 stroke-primary'} />
              </span>
              <span className={'p-1 bg-accent rounded-full'}>
                <YoutubeIcon className={'size-6 stroke-1 stroke-primary'} />
              </span>
            </TooltipProvider>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

function HeroBGCover() {
  return (
    <div className={'absolute top-0 right-0 w-full h-full z-0'}>
      <img
        src='/logo-dark.svg'
        alt='hero-image'
        height={'100%'}
        width={'100%'}
        loading='eager'
        fetchPriority='high'
        decoding='async'
        className={'w-full h-full object-contain opacity-15'}
      />
    </div>
  );
}
