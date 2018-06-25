import CMS from 'netlify-cms'

import FrontPagePreview from './preview-templates/FrontPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import GeneralPreview from './preview-templates/GeneralPreview';

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('frontpage', FrontPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('general', GeneralPreview)
