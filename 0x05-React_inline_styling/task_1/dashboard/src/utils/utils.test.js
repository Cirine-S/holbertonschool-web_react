import {strict as assert} from 'assert'
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('Test Utils', () => {
	it('checks return of getFullYear', () => {
		assert.equal(getFullYear(), 2021)
	})
	it('checks return of getFooterCopy with isIndex === true', () => {
		assert.equal(getFooterCopy(true), 'Holberton School')
	})
	it('checks return of getFooterCopy with isIndex === false', () => {
		assert.equal(getFooterCopy(false), 'Holberton School main dashboard')
	})
	it('checks return of getLatestNotification', () => {
		assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD')
	})
})
