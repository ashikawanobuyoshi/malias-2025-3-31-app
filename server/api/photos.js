// server/api/photos.js
export default defineEventHandler(async (event) => {
    try {
      // ここでKurocoの写真ギャラリーAPIのURLを指定
      const kurocoPhotoApiUrl = 'https://your-kuroco-domain/api/photos';
      const photos = await $fetch(kurocoPhotoApiUrl);
      return photos;
    } catch (error) {
      // エラーハンドリング
      return { error: '写真データの取得に失敗しました', details: error.message };
    }
  });