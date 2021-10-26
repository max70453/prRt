<template lang="pug">
  .reviews
    .reviews__title {{ reviewsData.title }}
    textarea(cols="148", rows="15", :placeholder="reviewsData.placeholder").reviews__textarea
    .reviews__form-container
      .reviews__add-files(v-if="!files.length")
        .reviews__pic
          label.reviews__label
            img(src="@/assets/images/attach.png").reviews__img
            input(type="file", hidden, accept="image/jpeg,image/png,image/gif,image/mp4" @change="handleFileUpload($event)")
        .reviews__add-container
          .reviews__add-text Прикрепить файлы
          .reviews__add-format Jpg, png, gif, mp4 не более 15 Мб

      .reviews__add-progressBar(v-if="progress > 0")
        progress-bar(:options="options", :value="progress")

      .reviews__files(v-if="files.length > 0 && !progress")
        .reviews__file(v-for="(file, index) in files")
          img(src="@/assets/images/fileIcon.png").reviews__img
          .reviews__wrap
            .reviews__text {{ nameFile(file.name) }}
              .reviews__close-btn(@click="deleteFile(index)")
            
            .reviews__size-type {{ Extention(file.type) }}, {{ Size(file.size) }}
        .reviews__add(v-if="disableBtn")
          label.reviews__label
            img(src="@/assets/images/addFileImg.png").reviews__img.reviews__img--add
            input(type="file", hidden, accept="image/jpeg,image/png,image/gif,image/mp4" @change="handleFileUpload($event)")
          span.reviews__more-files Загрузить еще
      .reviews__send-review
        a(href="#").reviews__send-btn {{ reviewsData.buttonName }}
      
</template>

<script>
export default {
  data(){
    return{
      errors: [],
      validTypes: ['image/jpeg','image/png','image/gif','image/mp4'],
      reviewsData: {
        title: 'Оставьте отзыв о вашем использовании!',
        tAreaPlaceholder: 'Напишите ваш отзыв...',
        placeholder: 'Напишите ваш отзыв...',
        buttonName: 'Отправить отзыв'
      },
      file: '',
      files: [],
      disableBtn: true,
      progress: 0,
      fileName: '',
      fileType: '',
      fileSize: '',
      options: {
      text: {
        hideText: true
      },
      progress: {
        color: '#579AFF',
        backgroundColor: '#fff',
        inverted: false
      },
      layout: {
        height: 12,
        width: 169,
        progressPadding: 0,
        type: 'line'
      }
    }
    }
  },
  beforeUpdate(){
    if(this.files.length >= 5)
      this.disableBtn = false
    else
      this.disableBtn = true
  },
  methods:{
    deleteFile(file){
      this.files.splice(file, 1);
    },
    validFormat(file){
      for(let i = 0; i < this.validTypes.length; i++){
        if(file.type === this.validTypes[i]){
          return true;
        }
      }
      return false;
    },
    handleFileUpload(event){
      console.log(event.target.files[0].type);
      if(event.target.files.length > 0 && this.validFormat(event.target.files[0])){
        
          let formData = new FormData();
          formData.append('file', this.file);
          this.axios
            .post('...', formData,{
              onUploadProgress: (e) => {
                setTimeout(() => {this.progress = Math.min(Math.round(e.loaded * 100 / e.total))}, 1000);
              }
            })
            .then(() => {
                this.hiddenProgress = true
            })
            .catch(() => {
              setTimeout(() => { this.progress = 0 }, 2000)
            })

            this.fileName = event.target.files[0].name
            this.fileType = event.target.files[0].type
            this.fileSize = this.Size(event.target.files[0].size)
            this.files.push(event.target.files[0])
            console.log(this.files)
        
        
      }
    },
    Size(size){
      if(size > 15000000){
        this.errors.push('too big');
        return;
      }
      if(size < 1024) {
          return `${size} bytes`; 
      } else if(size > 1024 && size < 1048576) {
          return `${(size/1024).toFixed(1)} KB`;
      } else if(size > 1048576) {
          return `${(size/1048576).toFixed(1)} MB`;
      }
    },
    nameFile(file){
      return file.substring(0, file.lastIndexOf('.')) || file;
    },
    Extention(file){
      return file.split("/").slice(1).join("/");
    },
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.vuejs-progress-bar
    width: 172px
    border: 1px solid #CDD3DB
    line-height: 12px

.reviews

  &__title
    color: #000
    font-family: $font-family-bold
    font-size: 35px
    line-height: 43px
    margin-bottom: 32px

  &__textarea
    border: 1px solid #CDD3DB
    border-radius: 5px
    resize: none
    margin-bottom: 36px

    &::placeholder 
      color: #000
      font-size: 17px
      line-height: 29px
      opacity: 0.5
      padding-top: 18px
      padding-left: 25px
      
  &__form-container
    margin-bottom: 110px
    display: flex
    align-items: center
    justify-content: space-between

  &__add-files
    display: flex
    align-items: center
  
  &__pic
    border-radius: 50%
    width: 46px
    height: 46px
    margin-right: 15px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
  
  &__add-container

  &__add-text
    color: $color-text-base
    font-size: 15px
    line-height: 18px
    font-weight: 500px
    margin-bottom: 6px

  &__add-format
    font-size: 13px
    line-height: 15px
    color: #000000
    opacity: 0.5

  &__send-review
    display: flex
    align-items: center
    justify-content: center
    background: #0066FF
    width: 204px
    height: 56px
    border-radius: 40px

  &__send-btn
    font-weight: $font-family-bold
    font-size: 15px
    line-height: 18px
    color: #fff
    width: 100%
    border-radius: 50px
    height: 56px
    display: flex
    align-items: center
    justify-content: center

  &__files

  &__label
    margin-top: 6px
    cursor: pointer

  &__file
    margin-bottom: 10px
    display: flex
  
  &__img
    margin-right: 15px

    &--add
      cursor: pointer
  
  &__text
    font-size: 15px
    line-height: 15px
    margin-bottom: 6px
  
  &__close-btn
    width: 10px
    height: 10px
    cursor: pointer
    display: inline-block
    margin-left: 15px
    background: url('../assets/images/closeBtn.png')

  &__wrap

  &__size-type
    font-size: 13px
    line-height: 16px
    color: #000
    opacity: 0.5

  &__more-files
    font-size: 15px
    line-height: 15px
    margin-right: 15px

  &__add
    display: flex
    align-items: center

</style>