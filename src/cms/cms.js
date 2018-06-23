import CMS from 'netlify-cms'

import FrontPagePreview from './preview-templates/FrontPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', FrontPagePreview)
