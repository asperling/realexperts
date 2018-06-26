import CMS from 'netlify-cms'

//import FrontPagePreview from './preview-templates/FrontPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
//CMS.registerPreviewTemplate('frontpage', FrontPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
