/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { LatLng, LatLngBounds } from "./latlng";
import { Map_ } from "./map";
import { Marker } from "./marker";
import { MVCArray } from "./mvcarray";
import { MVCObject } from "./mvcobject";
import { Size } from "./size";
import { Polyline } from "./polyline";
declare const initialize: () => void;
export { Marker, Map_ as Map, Size, MVCArray, MVCObject, Polyline, LatLng, LatLngBounds, initialize };
