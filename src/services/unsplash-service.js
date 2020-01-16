import Unsplash, {toJson} from 'unsplash-js/native';

const unsplash = new Unsplash({
  accessKey: 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
});

export default class UnsplashService {
  getThumbPhotos = async () => {
    const photos = await unsplash.photos.listPhotos(1, 30).then(toJson);
    return photos.map(this._transformThumbPhoto);
  };

  getSmallPhoto = async (id) => {
    const photo = await unsplash.photos.getPhoto(id).then(toJson);
    return this._transformSmallPhoto(photo);
  };

  _transformThumbPhoto = photo => {
    return {
      id: photo.id,
      url: photo.urls.thumb,
      alt_description: photo.alt_description,
      creator: photo.user.username,
    };
  };

  _transformSmallPhoto = photo => {
    return {
      id: photo.id,
      url: photo.urls.small,
      description: photo.description,
      alt_description: photo.alt_description,
      creator: photo.user.username,
    };
  };
}
