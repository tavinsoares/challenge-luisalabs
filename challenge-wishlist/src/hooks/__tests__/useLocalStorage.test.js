import { renderHook, waitFor } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage"
import { act } from "react";

describe('useLocalStorage test', () => {
    let dataToStorage;
    beforeEach(() => {
        dataToStorage = "mocked value"
    });

    it('Should be value is storage', () => {
        const { result } = renderHook(() => useLocalStorage(
            { initialValue: dataToStorage, propStorage: 'test_key' }
        ))

        const [value, ] = result.current;

        const valueInStorage = JSON.parse(localStorage.getItem('test_key'))

        expect(value).toEqual(valueInStorage)
    });

    it('Should be change the value in storage when set the value', async () => {
        const { result } = renderHook(() => useLocalStorage(
            { initialValue: dataToStorage, propStorage: 'test_key' }
        ))

        const [, setValue] = result.current;

        act(() => {
            setValue("new_value_mocked")
        })

        let value
        await waitFor(() => {
            [value, ] = result.current
        })

        const valueInStorage = JSON.parse(localStorage.getItem('test_key'))
        expect(value).toEqual("new_value_mocked")
        expect(value).toEqual(valueInStorage)
    });
});