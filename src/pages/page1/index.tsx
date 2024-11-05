import { useEffect } from 'react';
// import { Button } from "../../components/Button";
import { IconButton } from '../../components/IconButton';
import { Tag } from '../../components/Tag';
import { TextCard } from '../../components/Cards/TextCard';
import { ImageCard } from '../../components/Cards/ImageCard';
import { LevelCourse } from '../../components/LevelCourse';
import { ChallengeCard } from '../../components/Cards/ChallengeCard';
import { Course } from '../../components/Course';
import { client } from '../../configs/api';
import {
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
} from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';

export default function Page1() {
  const { fetchMore, data } = useQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >(GetArticlesDocument, {
    variables: {
      search: 'b',
    },
  });
  console.log('check data hook', data);

  const arrayData = new Array(4).fill('').map((_, index) => index + 1);
  const fetchData = async () => {
    const { data } = await client.query<GetArticlesQuery>({
      fetchPolicy: 'network-only',
      query: GetArticlesDocument,
      variables: {
        page: 1,
        search: 'c',
        limit: 5,
        sort: 'DESC',
      },
    });
    console.log('check data', data.getArticles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => {
            fetchMore({
              variables: {
                page: 1,
                search: 'c',
                limit: 10,
                sort: 'DESC',
              },
            });
          }}
        >
          FetchMore
        </button>
        <div className='flex gap-5 justify-between'>
          <ChallengeCard
            imageLink='/images/icons/cards/icon-card.webp'
            avatarLink='/images/icons/cards/icon-card.webp'
            className='w-60'
            likeNumber={1000}
            postedDate='20/07/2024'
          />
          <ChallengeCard
            imageLink='/images/webImages/course-test.webp'
            avatarLink='/images/icons/cards/icon-card.webp'
            className='w-60'
            likeNumber={100}
            postedDate='20/07/2024'
          />
          <ChallengeCard
            imageLink='/images/icons/cards/icon-card.webp'
            avatarLink='/images/icons/cards/icon-card.webp'
            className='w-60'
            likeNumber={1000}
            postedDate='20/07/2024'
          />
          <ChallengeCard
            imageLink='/images/webImages/course-test.webp'
            avatarLink='/images/icons/cards/icon-card.webp'
            className='w-60'
            likeNumber={100}
            postedDate='20/07/2024'
          />
        </div>

        <div className='flex justify-between mt-10'>
          {arrayData.map((x) => (
            <ImageCard
              key={x}
              status='default'
              iconLink='/images/icons/cards/icon-card.webp'
              className='w-52'
            />
          ))}
        </div>
        <div className='flex justify-between mt-10'>
          {arrayData.map((x) => (
            <IconButton
              key={x}
              size='md'
              variant='colored'
              iconLink='/images/icons/common/arrow-right.svg'
              disableIconLink=''
            />
          ))}
        </div>
        <div className='flex justify-between mt-10'>
          {arrayData.map((x) => (
            <Tag key={x} variant='colored'>
              1000 xp
            </Tag>
          ))}
        </div>
        <div className='flex justify-between mt-10'>
          {arrayData.map((x) => (
            <TextCard key={x} status='incorrect' paddingSize='sm'>
              Text
            </TextCard>
          ))}
        </div>
        <div className='flex justify-between mt-10'>
          {arrayData.map((x) => (
            <LevelCourse
              key={x}
              variant='beginner'
              className='w-fit h-[32px]'
              content='Beginner'
            />
          ))}
        </div>
      </div>
      <div className='flex gap-10 justify-between'>
        <Course
          levelVariant='intermediate'
          className='w-60'
          courseName='Course name'
          subText='3 mins remaining'
          courseImage='/images/webImages/course-test.webp'
          avatar='/images/icons/cards/icon-card.webp'
          completeProcess={60}
          isHasVideo={true}
        />
        <Course
          levelVariant='advance'
          className='w-60'
          courseName='Course name'
          subText='sub text'
          courseImage='/images/icons/cards/icon-card.webp'
          avatar='/images/icons/cards/icon-card.webp'
          expAmount={1000}
        />
        <Course
          levelVariant='advance'
          className='w-60'
          courseName='Course name'
          subText='sub text'
          courseImage='/images/icons/cards/icon-card.webp'
          avatar='/images/icons/cards/icon-card.webp'
          expAmount={1000}
        />
        <Course
          levelVariant='beginner'
          className='w-60'
          courseName='Course name'
          // subText='sub text'
          courseImage='/images/icons/cards/icon-card.webp'
          // avatar='/images/icons/cards/icon-card.webp'
          // expAmount={1000}
        />
      </div>
    </>
  );
}
