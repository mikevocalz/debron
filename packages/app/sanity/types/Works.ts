import { PortableTextBlock, PortableTextObject} from 'sanity';

export type Work = {
  _id: string | number;
  _createdAt: Date;
  author: string;
  title: string;
name: string;
slug: string;
url: string;
youtube: string;
description: PortableTextObject;
main_image: string;
images: string[];
content: PortableTextBlock
}