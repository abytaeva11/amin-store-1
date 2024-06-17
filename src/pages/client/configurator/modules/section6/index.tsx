import { MdOutlineSearch } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { PiNoteDuotone } from "react-icons/pi";
import {
  Icon10Power,
  Icon11Wifi,
  Icon13Sound,
  Icon1Proses,
  Icon2Cooler,
  Icon3Mother,
  Icon4Ram,
  Icon5Video,
  Icon7Disk1,
  Icon9Body,
} from 'src/icons';
import { KomputerBack } from 'src/datas';
import "./index.scss";
import {useGetAllProductsQuery} from "src/store";

export const Section6Module = () => {
  const backend = KomputerBack[0]
  const backend2 = KomputerBack[1]
  const { data } = useGetAllProductsQuery({})

  console.log("Client >>>>>>" ,data)

  return (
    <section >
      <div id="section6">
        <div className="section6">
          <div className='section6-block'>
            <div className='monitorik'>
              <h3><Icon1Proses /></h3>
              <h1>Процессор</h1>
            </div>
            <div className='monitorik'>
              <h3><Icon2Cooler /></h3>
              <h1>{backend2.text1}</h1>
            </div>
            <div className='monitorik'>
              <h3><Icon3Mother /></h3>
              <h1>{backend2.text2}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon5Video /></h3>
              <h1>{backend2.text3}</h1>
            </div>

            <div className='monitorik'>
              <h3><Icon5Video /></h3>
              <h1>{backend2.text4}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon7Disk1 /></h3>
              <h1>{backend2.text5}</h1>
            </div>
            <div className='monitorik'>
              <h3><Icon9Body /></h3>
              <h1>{backend2.text6}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon9Body /></h3>
              <h1>{backend2.text7}</h1>
            </div>

            <div className='monitorik'>
              <h3><Icon13Sound /></h3>
              <h1>{backend2.text8}</h1>
            </div>
            <div className='monitorik'>
              <h3><Icon10Power /></h3>
              <h1>{backend2.text9}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon11Wifi /></h3>
              <h1>{backend2.text10}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon4Ram /></h3>
              <h1>{backend2.text11}</h1>
            </div>

            <div className='monitorik'>
              <h3><Icon13Sound /></h3>
              <h1>{backend2.text12}</h1>
            </div>
            <div className='monitorik'>
              <h3><Icon10Power /></h3>
              <h1>{backend2.text13}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon11Wifi /></h3>
              <h1>{backend2.text14}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon4Ram /></h3>
              <h1>{backend2.text15}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon11Wifi /></h3>
              <h1>{backend2.text16}</h1>
            </div>
            <div className='monitorik'>
              <h3>< Icon4Ram /></h3>
              <h1>{backend2.text17}</h1>
            </div>
          </div>
          <div className='section6-block1'>

            <div className='section6-block1-title'>
              <div>
                <h1>{backend.text1}</h1>
                <h1>{backend.text2}</h1>
                <h1>{backend.text3}</h1>
                <h1>{backend.text4}</h1>
                <h1>{backend.text5}</h1>
                <h1>{backend.text6}</h1>
                <h1>{backend.text7}</h1>
                <h1>{backend.text8}</h1>
                <h1>{backend.text9}</h1>
                <h1>{backend.text10}</h1>
                <h1>{backend.text11}</h1>
                <h1>{backend.text12}</h1>
                <h1>{backend.text13}</h1>
                <h1>{backend.text14}</h1>
                <h1>{backend.text15}</h1>
                <h1>{backend.text16}</h1>
                <h1>{backend.text17}</h1>



              </div>
              <div>
                <div className='section6-block1-title-select'>
                  <select >
                    <option value="">не выбрано</option>
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>



                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>

                </div>
                <div className='section6-block1-title-select'>
                  <select >не выбрано
                    <option value="">iNTEL</option>
                    <option value="">iNTEL cORE 13</option>
                    <option value="">iNTEL cORE 15</option>
                    <option value="">iNTEL cORE 17</option>
                    <option value="">amd</option>
                    <option value="">RyZEN 5</option>
                  </select>
                  <h6><Icon10Power /></h6>
                </div>
              </div>
              <div className='section6-block2'>
                <div className='poisk'>
                  <input type="text" placeholder='поиск конфигурации по номеру' />
                  <h5><MdOutlineSearch /></h5>

                </div>

                <div className='blur-block'>
                  <img src="/img/configurator-mask.svg.png" alt="" />
                  <h1>0 c </h1>
                  <div className='blur-block-btn'>
                    <button>купить</button>
                    <h3><MdDeleteForever /></h3>
                    <h3><PiNoteDuotone /></h3>

                  </div>
                  <div className='blur-block-btn2'>
                    <button>инструкция</button>
                    <button>помощь</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

