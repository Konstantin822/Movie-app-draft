import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
query GetHome {
    homeDataApis {
      data {
        id
        attributes {
          name
          type
          rating
          time
          desc
          starring
          genre
          tags
          img {
            data {
              attributes {
                url
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          video
          date
        } 
      }
    }
  }
`;