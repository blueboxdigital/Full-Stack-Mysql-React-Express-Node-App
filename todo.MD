## Users

- Roles & Permissions

//
//
//

## BLOG

### [Table Structure]

```
├── Posts
| ├── PostID
| ├── PostTitle
| ├── PostDate
| ├── Deleted
| ├── OwnerID (user id)
| ├── Status
| ├── Blurb
| ├── Categories
| └── Likes
├── PostDetails
| ├── PostDetailID
| ├── PostID
| └── PostText
├── Comments
| ├── CommentID
| ├── Comment
| ├── CommenterID (user id)
| ├── CommentDate
| └── Deleted
```

## Products

### [Table Structure]

```
├── Products
| ├── ProductId
| ├── ProductName
| ├── ProductPrice
| ├── ProductThumbnail
| └── ProductImage

├── ProductDetail
| ├── ProductDetailId
| ├── ProductType
| ├── ProductDescription
| ├── ProductColor
| ├── ProductSizes (array?)
| ├── ProductGallery (array?)
| └── ProductDownloads (array?)
```
