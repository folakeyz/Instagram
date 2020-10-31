import * as React from 'react';
import { IInstagramProps } from './IInstagramProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from "jquery";
import Feed from './Instagram/Instagram'

export default class Instagram extends React.Component<IInstagramProps, {}> {
  public render(): React.ReactElement<IInstagramProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
      <Feed />
      </>
    );
  }
}
