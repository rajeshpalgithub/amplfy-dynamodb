/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      owner
      s3key
      createdAt
      tags
      collections {
        nextToken
      }
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        s3key
        createdAt
        tags
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($name: String!) {
    getCollection(name: $name) {
      name
      owner
      createdAt
      images {
        nextToken
      }
      updatedAt
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $name: String
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCollections(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImageAndCollection = /* GraphQL */ `
  query GetImageAndCollection($id: ID!) {
    getImageAndCollection(id: $id) {
      id
      owner
      collectionName
      imageID
      createdAt
      collection {
        name
        owner
        createdAt
        updatedAt
      }
      image {
        id
        owner
        s3key
        createdAt
        tags
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listImageAndCollections = /* GraphQL */ `
  query ListImageAndCollections(
    $filter: ModelImageAndCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageAndCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        collectionName
        imageID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchImages = /* GraphQL */ `
  query SearchImages(
    $filter: SearchableImageFilterInput
    $sort: SearchableImageSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchImages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        owner
        s3key
        createdAt
        tags
        updatedAt
      }
      nextToken
      total
    }
  }
`;
