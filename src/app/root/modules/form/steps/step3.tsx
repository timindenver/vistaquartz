import { type Dispatch, type SetStateAction, useRef, useState } from 'react'

import { Dialog, Flex, Grid, Image, Portal, Text } from '@chakra-ui/react'
import type { FormFields } from 'core/context/form'
import { Controller, useFormContext } from 'react-hook-form'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import ArrowLeftIcon from 'shared/assets/icons/arrowLeft'
import BinIcon from 'shared/assets/icons/bin'
import Bin1Icon from 'shared/assets/icons/bin1'
import CloseIcon from 'shared/assets/icons/close'
import 'swiper/css'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

type Step3Props = { uploadedImages: ImageListType; setUploadedImages: Dispatch<SetStateAction<ImageListType>>; isMobile: boolean | undefined }

export const Step3 = ({ uploadedImages, setUploadedImages, isMobile }: Step3Props) => {
  const { control } = useFormContext<FormFields>()

  const maxUploadedImages = 10
  const swiperRef = useRef<null | SwiperRef>(null)

  const [dialog, setDialog] = useState<{
    open: boolean
    activeImageIndex: number | null
  }>({
    open: false,
    activeImageIndex: null,
  })

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setUploadedImages(imageList as never[])
  }

  const handleImageDelete = () => {
    const activeImageIndex = dialog.activeImageIndex

    if (activeImageIndex === null) {
      return
    }

    if (uploadedImages.length <= 1) {
      setDialog({ open: false, activeImageIndex: null })
      setUploadedImages([])
    } else {
      setDialog((prev) => ({
        ...prev,
        activeImageIndex: activeImageIndex > 0 ? activeImageIndex - 1 : activeImageIndex,
      }))
      setUploadedImages((prev) => prev.filter((_, index) => index !== activeImageIndex))
    }
  }

  return (
    <>
      <Flex flexDir='column' gap='md'>
        <Flex flexDir='column' gap='0'>
          <Text textStyle='subheader' color='blue.dark'>
            (Optional) For the most accurate estimate please upload two or three photos of your bathroom. You may also text your images to 303.555.1212
          </Text>
          <Text textStyle='description' color='blue.dark'>
            Please include photos of the entry to the bathroom and the existing bath or shower. The more images the better!
          </Text>
        </Flex>

        <Controller
          control={control}
          name='3.images'
          render={({ field: { name: controllerName, value: controllerValue, onChange: controllerOnChange } }) => {
            return (
              <ImageUploading multiple value={uploadedImages} onChange={onChange} maxNumber={maxUploadedImages}>
                {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                  <Flex>
                    {uploadedImages.length === 0 ? (
                      <Flex
                        {...dragProps}
                        w='100%'
                        h='120px'
                        minH='fit-content'
                        alignItems='center'
                        justifyContent='center'
                        bg='blue.light'
                        cursor='pointer'
                        borderWidth='2px'
                        borderColor={isDragging ? 'blue.dark' : 'blue.light'}
                        borderStyle='solid'
                        onClick={onImageUpload}
                      >
                        <Text textStyle='smallText' color='blue.dark' textAlign='center'>
                          + Upload images
                        </Text>
                      </Flex>
                    ) : (
                      <Flex w='100%' flexDir='column' gap='md'>
                        <Grid w='100%' h='100px' minH='fit-content' gap='10px' gridTemplateColumns='repeat(3, 1fr)'>
                          {uploadedImages?.map((uploadedImage, uploadedImageIndex) => {
                            return (
                              <Flex
                                key={uploadedImageIndex + 46584}
                                pos='relative'
                                bg='blue.light'
                                onClick={() => {
                                  setDialog({
                                    open: true,
                                    activeImageIndex: uploadedImageIndex,
                                  })
                                }}
                              >
                                <Image maxW={{ base: '109px', xl: '167px' }} maxH={{ base: '78px', xl: '100px' }} objectFit='contain' src={uploadedImage?.dataURL} m='auto' />
                                <Flex
                                  w='32px'
                                  h='32px'
                                  pos='absolute'
                                  zIndex='1'
                                  borderRadius='50%'
                                  bg='blue.dark'
                                  alignItems='center'
                                  justifyContent='center'
                                  top='4px'
                                  right='4px'
                                  cursor='pointer'
                                  onClick={(event) => {
                                    event.stopPropagation()
                                    setUploadedImages((prev) => prev.filter((_, index) => index !== uploadedImageIndex))
                                  }}
                                >
                                  <BinIcon width='16px' height='16px' color='white' />
                                </Flex>
                              </Flex>
                            )
                          })}
                        </Grid>
                        <Flex
                          {...dragProps}
                          w='100%'
                          h={{ base: '50px', xl: '60px' }}
                          alignItems='center'
                          justifyContent='center'
                          bg='blue.light'
                          cursor='pointer'
                          borderWidth='2px'
                          borderColor={isDragging ? 'blue.dark' : 'blue.light'}
                          borderStyle='solid'
                          onClick={onImageUpload}
                        >
                          <Text textStyle='smallText' color='blue.dark' textAlign='center'>
                            + Upload more images
                          </Text>
                        </Flex>
                      </Flex>
                    )}
                  </Flex>
                )}
              </ImageUploading>
            )
          }}
        />
      </Flex>

      <Dialog.Root
        size={isMobile ? 'full' : 'cover'}
        placement='center'
        motionPreset='slide-in-bottom'
        open={dialog.open}
        onOpenChange={(event) => setDialog({ open: event.open, activeImageIndex: null })}
      >
        {dialog.activeImageIndex !== null && (
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content p={{ base: '0', xl: '28px' }}>
                {!isMobile && (
                  <Dialog.CloseTrigger p='20px'>
                    <CloseIcon width='20px' height='20px' color='var(--chakra-colors-blue-dark)' cursor='pointer' />
                  </Dialog.CloseTrigger>
                )}
                <Dialog.Header
                  p='0'
                  pb={{ base: '18px', xl: '28px' }}
                  justifyContent='center'
                  borderBottom={{
                    base: '1px solid var(--chakra-colors-blue-dark)',
                    xl: 'unset',
                  }}
                >
                  <Dialog.Title w='100%' display='flex' alignItems='center' justifyContent={{ base: 'space-between', xl: 'center' }} pt={{ base: '18px', xl: '0' }} px={{ base: 'md', xl: '0' }}>
                    {isMobile && (
                      <Flex
                        alignItems='center'
                        gap='8px'
                        cursor='pointer'
                        flex='1'
                        onClick={() => {
                          setDialog({ open: false, activeImageIndex: null })
                        }}
                      >
                        <ArrowLeftIcon width='10px' height='16px' color='var(--chakra-colors-blue-dark)' />
                        <Text textStyle='smallText' color='blue.dark' mt='2px'>
                          Back
                        </Text>
                      </Flex>
                    )}
                    <Flex alignItems='center' gap='sm' flex='1' justifyContent='center'>
                      <Text textStyle='smallText' color='black' textAlign='center'>
                        Photo {dialog.activeImageIndex + 1} of {uploadedImages.length}
                      </Text>
                      {!isMobile && (
                        <Flex mb='2px' cursor='pointer' onClick={handleImageDelete}>
                          <BinIcon width='20px' height='20px' color='var(--chakra-colors-blue-dark)' />
                        </Flex>
                      )}
                    </Flex>
                    {isMobile && (
                      <Flex cursor='pointer' flex='1' onClick={handleImageDelete} justifyContent='flex-end'>
                        <Bin1Icon width='24px' height='22px' color='var(--chakra-colors-blue-dark)' />
                      </Flex>
                    )}
                  </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body p='0' py={{ base: '18px', xl: '0' }} display='flex'>
                  <Flex width='100%' height={{ base: 'unset', xl: '100%' }} flex='1' alignItems='center' justifyContent='space-between' gap='28px' pos='relative'>
                    {!isMobile && (
                      <Flex
                        cursor='pointer'
                        pos='relative'
                        zIndex='2'
                        onClick={() => {
                          if (swiperRef.current) {
                            const activeIndex = swiperRef.current.swiper.activeIndex
                            const slidesLength = swiperRef.current.swiper.slides.length

                            const isFirstSlide = activeIndex === 0

                            swiperRef.current.swiper.slideTo(isFirstSlide ? slidesLength - 1 : activeIndex - 1)
                          }
                        }}
                      >
                        <ArrowLeftIcon width='21px' height='22px' color='var(--chakra-colors-blue-dark)' />
                      </Flex>
                    )}
                    <Swiper
                      ref={swiperRef}
                      style={{ width: '100%', height: '100%' }}
                      spaceBetween={50}
                      slidesPerView={1}
                      onSlideChange={(event) => {
                        setDialog((prev) => ({
                          ...prev,
                          activeImageIndex: event.realIndex,
                        }))
                      }}
                    >
                      {uploadedImages?.map((uploadedImage) => {
                        return (
                          <SwiperSlide>
                            <Image src={uploadedImage.dataURL} pos='absolute' top='0' bottom='0' left='0' right='0' m='auto' maxH='100%' />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    {!isMobile && (
                      <Flex
                        rotate='180deg'
                        cursor='pointer'
                        pos='relative'
                        zIndex='2'
                        onClick={() => {
                          if (swiperRef.current) {
                            const activeIndex = swiperRef.current.swiper.activeIndex
                            const slidesLength = swiperRef.current.swiper.slides.length

                            const isLastSlide = activeIndex < slidesLength - 1

                            swiperRef.current.swiper.slideTo(isLastSlide ? activeIndex + 1 : 0)
                          }
                        }}
                      >
                        <ArrowLeftIcon width='21px' height='22px' color='var(--chakra-colors-blue-dark)' />
                      </Flex>
                    )}
                  </Flex>
                </Dialog.Body>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        )}
      </Dialog.Root>
    </>
  )
}
