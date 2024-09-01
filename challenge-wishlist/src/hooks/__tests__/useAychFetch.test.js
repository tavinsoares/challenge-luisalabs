import { renderHook } from "@testing-library/react";
import { EnumActionReducer, useFetchAsync } from "../useAsychFetch";
import { act } from "react";

global.fetch = jest.fn();

describe("useAsync test", () => {
  let mockData;

  beforeEach(() => {
    mockData = { data: "Mocked data" };
  });


  it("Should update data when execute the promise", async () => {
    const { result } = renderHook(() =>
      useFetchAsync({
        status: EnumActionReducer.IDLE,
        data: [],
        error: null,
      })
    );

    const { run } = result.current;
    const mockedResolved = new Promise((resolve) => {
        resolve(mockData);
      });

    await act(async () => {
      run(mockedResolved);
    });

    const { status, data, error } = result.current;
    expect(status).toEqual(EnumActionReducer.RESOLVED);
    expect(data.data).toBe(mockData.data);
    expect(error).toEqual(null);
  });

    it("Should update status to pending when run is called", () => {
      const { result } = renderHook(() =>
          useFetchAsync({
            status: EnumActionReducer.IDLE,
            data: [],
            error: null,
          })
        );

        const { run } = result.current;
        const mockedPending = new Promise(() => {})

        act(() => {
          run(mockedPending)
        })

        const { status, data, error } = result.current
        expect(status).toEqual(EnumActionReducer.PENDING)
        expect(data).toEqual([])
        expect(error).toEqual(null)
    });

    it("Should update error and status state when run a promisse rejected", async () => {
      const { result } = renderHook(() =>
          useFetchAsync({
            status: EnumActionReducer.IDLE,
            data: [],
            error: null,
          })
        );

        const { run } = result.current;
        const mockedRejected = new Promise((resolve,reject) => {
            reject(mockData)
          })

        await act(async () => {
          run(mockedRejected);
        });

        const { status, data, error } = result.current;

        expect(status).toEqual(EnumActionReducer.REJECTED);
        expect(data).toEqual([]);
        expect(error).toEqual(mockData)
    })
});
