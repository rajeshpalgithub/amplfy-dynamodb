/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String!) {
    onCreateImage(owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String!) {
    onUpdateImage(owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String!) {
    onDeleteImage(owner: $owner) {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection($owner: String!) {
    onCreateCollection(owner: $owner) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection($owner: String!) {
    onUpdateCollection(owner: $owner) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection($owner: String!) {
    onDeleteCollection(owner: $owner) {
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
export const onCreateImageAndCollection = /* GraphQL */ `
  subscription OnCreateImageAndCollection($owner: String!) {
    onCreateImageAndCollection(owner: $owner) {
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
export const onUpdateImageAndCollection = /* GraphQL */ `
  subscription OnUpdateImageAndCollection($owner: String!) {
    onUpdateImageAndCollection(owner: $owner) {
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
export const onDeleteImageAndCollection = /* GraphQL */ `
  subscription OnDeleteImageAndCollection($owner: String!) {
    onDeleteImageAndCollection(owner: $owner) {
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
