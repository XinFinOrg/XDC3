/*
    This file is part of xdc3.

    xdc3 is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    xdc3 is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with xdc3.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file is-user-ethereum-address-in-bloom.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2019
 */

import { isTopic } from 'xdc3-utils';

// $ExpectType boolean
isTopic('0x000000000000000000000000b3bb037d2f2341a1c2775d51909a3d944597987d');
