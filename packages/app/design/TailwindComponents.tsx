import {
  View as RNView,
  ScrollView as RNScrollView,
  Text as RNText,
  Pressable as RNPressable,
  FlatList as RNFlatlist,
} from 'react-native'

import {
  Article as RNArticle,
  Header as RNHeader,
  Nav as RNNav,
  Section as RNSection,
  Footer as RNFooter,
  A as RNA,
  P as RNP,
  HR as RNHR,
  UL as RNUL,
  LI as RNLI,
  Span as RNSpan,
  H1 as RNH1,
  H2 as RNH2,
  H3 as RNH3,
  H4 as RNH4,
  H5 as RNH5,
  H6 as RNH6,
  BR as RNBR,
  BlockQuote as RNBlockQuote
} from '@expo/html-elements'

import { SolitoImage } from 'solito/image'
import { styled } from 'nativewind'
import { MotiPressable as MtPressable } from 'moti/interactions'
import { MotiLink as MtLink } from 'solito/moti'

import {
  Button as RNButton,
  Avatar as RNAvatar,
  Card as RNCard,
  IconButton as RNIconButton,
} from 'react-native-paper'

export const View = styled(RNView)
export const ScrollView = styled(RNScrollView)
export const FlatList = styled(RNFlatlist)
export const Text = styled(RNText)
export const Pressable = styled(RNPressable)
export const Image = styled(SolitoImage)
export const Button = styled(RNButton)
export const Card = styled(RNCard)
export const IconButton = styled(RNIconButton)

export const A = styled(RNA)
export const P = styled(RNP)
export const HR = styled(RNHR)
export const BR = styled(RNBR)
export const Span = styled(RNSpan)
export const BlockQuote = styled(RNBlockQuote)

export const H1 = styled(RNH1)
export const H2 = styled(RNH2)
export const H3 = styled(RNH3)
export const H4 = styled(RNH4)
export const H5 = styled(RNH5)
export const H6 = styled(RNH6)
export const UL = styled(RNUL)
export const LI = styled(RNLI)

export const MotiPressable = styled(MtPressable)
export const MotiLink = styled(MtLink)
export const Article = styled(RNArticle)
export const Header = styled(RNHeader)
export const Section = styled(RNSection)
export const Footer = styled(RNFooter)
export const Nav = styled(RNNav)
