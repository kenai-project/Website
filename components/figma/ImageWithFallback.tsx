import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgb3BhY2l0eT0iMC4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIuNSI+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjEwNCIgaGVpZ2h0PSIyNCIgcng9IjQiLz48dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMzMzMzMzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RmFsbGJhY2s8L3RleHQ+PC9zdmc+'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
