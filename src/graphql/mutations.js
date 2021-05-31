/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createImageAndCollection = /* GraphQL */ `
  mutation CreateImageAndCollection(
    $input: CreateImageAndCollectionInput!
    $condition: ModelImageAndCollectionConditionInput
  ) {
    createImageAndCollection(input: $input, condition: $condition) {
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
export const updateImageAndCollection = /* GraphQL */ `
  mutation UpdateImageAndCollection(
    $input: UpdateImageAndCollectionInput!
    $condition: ModelImageAndCollectionConditionInput
  ) {
    updateImageAndCollection(input: $input, condition: $condition) {
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
export const deleteImageAndCollection = /* GraphQL */ `
  mutation DeleteImageAndCollection(
    $input: DeleteImageAndCollectionInput!
    $condition: ModelImageAndCollectionConditionInput
  ) {
    deleteImageAndCollection(input: $input, condition: $condition) {
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
