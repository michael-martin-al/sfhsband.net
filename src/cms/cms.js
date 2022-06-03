import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import EventPagePreview from './preview-templates/EventPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ResourcesFormsPagePreview from './preview-templates/ResourcesFormsPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('resources', ResourcesFormsPagePreview)
CMS.registerPreviewTemplate('event', EventPagePreview)
