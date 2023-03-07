import {
    
    AiOutlineStrikethrough,
    AiFillHighlight,
    AiOutlineAlignLeft,
    AiOutlineAlignCenter,
    AiOutlineAlignRight,
  
  } from "react-icons/ai";
  import {AiOutlineFontSize} from "react-icons/ai"
  import {ImIndentIncrease} from "react-icons/im"
  import {RxLineHeight} from "react-icons/rx"
  import {FaOutdent} from "react-icons/fa"
  import {FcDocument} from 'react-icons/fc'
  import {AiTwotoneDelete} from 'react-icons/ai'
  import { VscDebugStepBack, VscDebugStepOver } from "react-icons/vsc";
  import { FiAlignJustify } from "react-icons/fi";
  import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
  import { ImTextColor } from "react-icons/im";
  import {
    MdOutlineFormatListBulleted,
    MdOutlineFormatListNumbered,
   
    MdFormatClear,
   
  } from "react-icons/md";
export const Icons=[
    // {
    //    icons:<ImPrinter/>,
    //    action:""
    // },
    {
       icons:<VscDebugStepBack/>,
       action:"undo"
    },
    {
       icons:<VscDebugStepOver />,
       action:"redo"
    },
    {
        icons:<BiBold />,
        action:"bold"
    },
    {
        icons:<BiItalic />,
        action:"italic"
    },
    {
        icons:<BiUnderline />,
        action:"underLine"
    },
    {
        icons:<AiOutlineStrikethrough />,
        action:"strikeThrough"
    },
    {
        icons: <ImTextColor />,
        action:"foreColor"
    },
    {
        icons: <AiFillHighlight />,
        action:""
    },
    {
        icons:  <AiOutlineAlignLeft />,
        action:"justifyLeft"
    },
    {
        icons: <AiOutlineAlignCenter />,
        action:"justifyCenter"
    },
    {
        icons:<AiOutlineAlignRight />,
        action:"justifyRight"
    },
    {
        icons: <FiAlignJustify />,
        action:"justifyFull"
    },
    {
        icons: <MdOutlineFormatListBulleted />,
        action:"insertUnorderedList"
    },
    {
        icons:<MdOutlineFormatListNumbered />,
        action:"insertOrderedList"
    },
    {
        icons:<AiTwotoneDelete />,
        action:"delete"
    },
 
    // {
    //     Icons:<FaOutdent/>,
    //     action : "outdent",
    // },
    // {
    //     Icons:<ImIndentIncrease/>,
    //     action : "indent",
    // },
    // {
    //     Icons:<RxLineHeight/>,
    //     action : "LineHeight",
    // },
    // {
    //     Icons:<AiOutlineFontSize/>,
    //     action : "FontSize",
    // },


]