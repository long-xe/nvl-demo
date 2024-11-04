// import { gql } from '@apollo/client';

import { gql } from '../../__generated__/gql';

export const GET_USERS = gql(`
  query getArticleDetailBySlug($slug: String!) {
  getArticleDetailBySlug(slug: $slug) {
    id
    author
    featured
    Content
    title
    Featured_Image
    user_created
    slug
    tags
    date_created
    related {
      related_Articles_id {
        id
        author
        featured
        Content
        title
        slug
        Featured_Image
        user_created
        tags
        status
        date_created
      }
    }
  }
}  
`);

// export const GET_USER = gql`
//   query GetUser($id: ID!) {
//     user(id: $id) {
//       id
//       name
//       email
//       posts {
//         id
//         title
//       }
//     }
//   }
// `;

// export const CREATE_USER = gql`
//   mutation CreateUser($input: CreateUserInput!) {
//     createUser(input: $input) {
//       id
//       name
//       email
//     }
//   }
// `;
