import { User } from "./user";

export type Video = {
  uuid: string;
  id: any;
  owner: string;
  description: string;
  title: string;
  cids: string[];
  views: any;
  likes: string[];
  dislikes: string[];
};

export type VideoProps = Video & User;
