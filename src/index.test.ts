import SimpleCamera from "./index";

jest.autoMockOff()

afterEach(() => {
  jest.restoreAllMocks()
})

test("testing if all the methods are present",() => {
  const c = new SimpleCamera({rootElement:document.body})
  jest.spyOn(c,"start")
  jest.spyOn(c,"stop")
})
