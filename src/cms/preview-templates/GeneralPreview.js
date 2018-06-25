import React from 'react'

const GeneralPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'site_title']);
    var posts = entry.getIn(['data', 'posts']);
    var thumb = posts && posts.get('thumb');
    return h('div', {},
      h('h1', {}, title),
      h('dl', {},
        h('dt', {}, 'Number of posts on Frontpage'),
        h('dd', {}, this.props.widgetsFor('posts').getIn(['widgets', 'front_limit']) || 0),
        h('dt', {}, 'Default Author'),
        h('dd', {}, this.props.widgetsFor('posts').getIn(['data', 'author']) || 'None')
      )
    );
  }
});

export default GeneralPreview
