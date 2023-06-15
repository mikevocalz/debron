import React from 'react';
import getYouTubeID from 'get-youtube-id';
import { Text } from 'app/design/TailwindComponents';

const YouTubePreview = ({ value }:any) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return (
            <Text>Missing YouTube URL</Text>
    )
  }
  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required()
    }
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YouTubePreview,
  },
};