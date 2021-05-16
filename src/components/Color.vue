<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input v-model="inp" type="textarea" rows="4" placeholder="请在这里输入"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left: 20px">
        <el-input type="textarea" rows="4" v-model="res"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left: 20px">
        <div class="color-preview" :style="colorPr"></div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-button size="medium" round type="primary" @click="rgbToHex">RGB转16进制</el-button>
      <el-button size="medium" round type="primary" @click="hexToRgb">16进制转RGB</el-button>
      <el-button size="medium" round type="danger" @click="clearInfo">清空</el-button>
    </el-row>
    <el-row style="margin-top: 20px; height: 400px">
      <el-table
        :header-cell-style="{'text-align':'center'}"
        :cell-style="tableCellStyle"
        :data="tableData"
        border
        style="width: 100%"
        height="700"
      >
        <el-table-column
          prop="color"
          label="颜色"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="describe"
          label="描述">
        </el-table-column>
        <el-table-column
          prop="hex"
          label="16进制">
        </el-table-column>
        <el-table-column
          prop="rgb"
          label="RGB">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Color',
  data () {
    return {
      inp: null,
      res: null,
      colorPr: {
        'background-color': 'white'
      },
      tableData: [
        {name: 'Pink', describe: '粉红', hex: '#FFC0CB', rgb: '255,192,203'},
        {name: 'Crimson', describe: '猩红', hex: '#DC143C', rgb: '220,20,60'},
        {name: 'LavenderBlush', describe: '脸红的淡紫色', hex: '#FFF0F5', rgb: '255,240,245'},
        {name: 'PaleVioletRed', describe: '苍白的紫罗兰红色', hex: '#DB7093', rgb: '219,112,147'},
        {name: 'HotPink', describe: '热情的粉红', hex: '#FF69B4', rgb: '255,105,180'},
        {name: 'DeepPink', describe: '深粉色', hex: '#FF1493', rgb: '255,20,147'},
        {name: 'MediumVioletRed', describe: '适中的紫罗兰红色', hex: '#C71585', rgb: '199,21,133'},
        {name: 'Orchid', describe: '兰花的紫色', hex: '#DA70D6', rgb: '218,112,214'},
        {name: 'Thistle', describe: '蓟', hex: '#D8BFD8', rgb: '216,191,216'},
        {name: 'plum', describe: '李子', hex: '#DDA0DD', rgb: '221,160,221'},
        {name: 'Violet', describe: '紫罗兰', hex: '#EE82EE', rgb: '238,130,238'},
        {name: 'Magenta', describe: '洋红', hex: '#FF00FF', rgb: '255,0,255'},
        {name: 'Fuchsia', describe: '灯笼海棠(红)', hex: '#FF00FF', rgb: '255,0,255'},
        {name: 'DarkMagenta', describe: '深洋红色', hex: '#8B008B', rgb: '139,0,139'},
        {name: 'Purple', describe: '紫色', hex: '#800080', rgb: '128,0,128'},
        {name: 'MediumOrchid', describe: '适中的兰花紫', hex: '#BA55D3', rgb: '186,85,211'},
        {name: 'DarkVoilet', describe: '深紫罗兰色', hex: '#9400D3', rgb: '148,0,211'},
        {name: 'DarkOrchid', describe: '深兰花紫', hex: '#9932CC', rgb: '153,50,204'},
        {name: 'Indigo', describe: '靛青', hex: '#4B0082', rgb: '75,0,130'},
        {name: 'BlueViolet', describe: '深紫罗兰的蓝色', hex: '#8A2BE2', rgb: '138,43,226'},
        {name: 'MediumPurple', describe: '适中的紫色', hex: '#9370DB', rgb: '147,112,219'},
        {name: 'MediumSlateBlue', describe: '适中的板岩暗蓝灰色', hex: '#7B68EE', rgb: '123,104,238'},
        {name: 'SlateBlue', describe: '板岩暗蓝灰色', hex: '#6A5ACD', rgb: '106,90,205'},
        {name: 'DarkSlateBlue', describe: '深岩暗蓝灰色', hex: '#483D8B', rgb: '72,61,139'},
        {name: 'Lavender', describe: '熏衣草花的淡紫色', hex: '#E6E6FA', rgb: '230,230,250'},
        {name: 'GhostWhite', describe: '幽灵的白色', hex: '#F8F8FF', rgb: '248,248,255'},
        {name: 'Blue', describe: '纯蓝', hex: '#0000FF', rgb: '0,0,255'},
        {name: 'MediumBlue', describe: '适中的蓝色', hex: '#0000CD', rgb: '0,0,205'},
        {name: 'MidnightBlue', describe: '午夜的蓝色', hex: '#191970', rgb: '25,25,112'},
        {name: 'DarkBlue', describe: '深蓝色', hex: '#00008B', rgb: '0,0,139'},
        {name: 'Navy', describe: '海军蓝', hex: '#000080', rgb: '0,0,128'},
        {name: 'RoyalBlue', describe: '皇家蓝', hex: '#4169E1', rgb: '65,105,225'},
        {name: 'CornflowerBlue', describe: '矢车菊的蓝色', hex: '#6495ED', rgb: '100,149,237'},
        {name: 'LightSteelBlue', describe: '淡钢蓝', hex: '#B0C4DE', rgb: '176,196,222'},
        {name: 'LightSlateGray', describe: '浅石板灰', hex: '#778899', rgb: '119,136,153'},
        {name: 'SlateGray', describe: '石板灰', hex: '#708090', rgb: '112,128,144'},
        {name: 'DoderBlue', describe: '道奇蓝', hex: '#1E90FF', rgb: '30,144,255'},
        {name: 'AliceBlue', describe: '爱丽丝蓝', hex: '#F0F8FF', rgb: '240,248,255'},
        {name: 'SteelBlue', describe: '钢蓝', hex: '#4682B4', rgb: '70,130,180'},
        {name: 'LightSkyBlue', describe: '淡蓝色', hex: '#87CEFA', rgb: '135,206,250'},
        {name: 'SkyBlue', describe: '天蓝色', hex: '#87CEEB', rgb: '135,206,235'},
        {name: 'DeepSkyBlue', describe: '深天蓝', hex: '#00BFFF', rgb: '0,191,255'},
        {name: 'LightBLue', describe: '淡蓝', hex: '#ADD8E6', rgb: '173,216,230'},
        {name: 'PowDerBlue', describe: '火药蓝', hex: '#B0E0E6', rgb: '176,224,230'},
        {name: 'CadetBlue', describe: '军校蓝', hex: '#5F9EA0', rgb: '95,158,160'},
        {name: 'Azure', describe: '蔚蓝色', hex: '#F0FFFF', rgb: '240,255,255'},
        {name: 'LightCyan', describe: '淡青色', hex: '#E1FFFF', rgb: '225,255,255'},
        {name: 'PaleTurquoise', describe: '苍白的绿宝石', hex: '#AFEEEE', rgb: '175,238,238'},
        {name: 'Cyan', describe: '青色', hex: '#00FFFF', rgb: '0,255,255'},
        {name: 'Aqua', describe: '水绿色', hex: '#D4F2E7', rgb: '212,242,231'},
        {name: 'DarkTurquoise', describe: '深绿宝石', hex: '#00CED1', rgb: '0,206,209'},
        {name: 'DarkSlateGray', describe: '深石板灰', hex: '#2F4F4F', rgb: '47,79,79'},
        {name: 'DarkCyan', describe: '深青色', hex: '#008B8B', rgb: '0,139,139'},
        {name: 'Teal', describe: '水鸭色', hex: '#008080', rgb: '0,128,128'},
        {name: 'MediumTurquoise', describe: '适中的绿宝石', hex: '#48D1CC', rgb: '72,209,204'},
        {name: 'LightSeaGreen', describe: '浅海洋绿', hex: '#20B2AA', rgb: '32,178,170'},
        {name: 'Turquoise', describe: '绿宝石', hex: '#40E0D0', rgb: '64,224,208'},
        {name: 'Auqamarin', describe: '绿玉/碧绿色', hex: '#7FFFAA', rgb: '127,255,170'},
        {name: 'MediumAquamarine', describe: '适中的碧绿色', hex: '#00FA9A', rgb: '0,250,154'},
        {name: 'MediumSpringGreen', describe: '适中的春天的绿色', hex: '#00FF7F', rgb: '0,255,127'},
        {name: 'MintCream', describe: '薄荷奶油', hex: '#F5FFFA', rgb: '245,255,250'},
        {name: 'SpringGreen', describe: '春天的绿色', hex: '#3CB371', rgb: '60,179,113'},
        {name: 'SeaGreen', describe: '海洋绿', hex: '#2E8B57', rgb: '46,139,87'},
        {name: 'Honeydew', describe: '蜂蜜', hex: '#F0FFF0', rgb: '240,255,240'},
        {name: 'LightGreen', describe: '淡绿色', hex: '#90EE90', rgb: '144,238,144'},
        {name: 'PaleGreen', describe: '苍白的绿色', hex: '#98FB98', rgb: '152,251,152'},
        {name: 'DarkSeaGreen', describe: '深海洋绿', hex: '#8FBC8F', rgb: '143,188,143'},
        {name: 'LimeGreen', describe: '酸橙绿', hex: '#32CD32', rgb: '50,205,50'},
        {name: 'Lime', describe: '酸橙色', hex: '#00FF00', rgb: '0,255,0'},
        {name: 'ForestGreen', describe: '森林绿', hex: '#228B22', rgb: '34,139,34'},
        {name: 'Green', describe: '纯绿', hex: '#008000', rgb: '0,128,0'},
        {name: 'DarkGreen', describe: '深绿色', hex: '#006400', rgb: '0,100,0'},
        {name: 'Chartreuse', describe: '查特酒绿', hex: '#7FFF00', rgb: '127,255,0'},
        {name: 'LawnGreen', describe: '草坪绿', hex: '#7CFC00', rgb: '124,252,0'},
        {name: 'GreenYellow', describe: '绿黄色', hex: '#ADFF2F', rgb: '173,255,47'},
        {name: 'OliveDrab', describe: '橄榄土褐色', hex: '#556B2F', rgb: '85,107,47'},
        {name: 'Beige', describe: '米色(褐)', hex: '#F5F5DC', rgb: '245,245,220'},
        {name: 'LightGoldenrodYellow', describe: '浅秋麒麟黄', hex: '#FAFAD2', rgb: '250,250,210'},
        {name: 'Ivory', describe: '象牙', hex: '#FFFFF0', rgb: '255,255,240'},
        {name: 'LightYellow', describe: '浅黄色', hex: '#FFFFE0', rgb: '255,255,224'},
        {name: 'Yellow', describe: '纯黄', hex: '#FFFF00', rgb: '255,255,0'},
        {name: 'Olive', describe: '橄榄', hex: '#808000', rgb: '128,128,0'},
        {name: 'DarkKhaki', describe: '深卡其布', hex: '#BDB76B', rgb: '189,183,107'},
        {name: 'LemonChiffon', describe: '柠檬薄纱', hex: '#FFFACD', rgb: '255,250,205'},
        {name: 'PaleGodenrod', describe: '灰秋麒麟', hex: '#EEE8AA', rgb: '238,232,170'},
        {name: 'Khaki', describe: '卡其布', hex: '#F0E68C', rgb: '240,230,140'},
        {name: 'Gold', describe: '金', hex: '#FFD700', rgb: '255,215,0'},
        {name: 'Cornislk', describe: '玉米色', hex: '#FFF8DC', rgb: '255,248,220'},
        {name: 'GoldEnrod', describe: '秋麒麟', hex: '#DAA520', rgb: '218,165,32'},
        {name: 'FloralWhite', describe: '花的白色', hex: '#FFFAF0', rgb: '255,250,240'},
        {name: 'OldLace', describe: '老饰带', hex: '#FDF5E6', rgb: '253,245,230'},
        {name: 'Wheat', describe: '小麦色', hex: '#F5DEB3', rgb: '245,222,179'},
        {name: 'Moccasin', describe: '鹿皮鞋', hex: '#FFE4B5', rgb: '255,228,181'},
        {name: 'Orange', describe: '橙色', hex: '#FFA500', rgb: '255,165,0'},
        {name: 'PapayaWhip', describe: '番木瓜', hex: '#FFEFD5', rgb: '255,239,213'},
        {name: 'BlanchedAlmond', describe: '漂白的杏仁', hex: '#FFEBCD', rgb: '255,235,205'},
        {name: 'NavajoWhite', describe: '纳瓦霍白', hex: '#FFDEAD', rgb: '255,222,173'},
        {name: 'AntiqueWhite', describe: '古代的白色', hex: '#FAEBD7', rgb: '250,235,215'},
        {name: 'Tan', describe: '晒黑', hex: '#D2B48C', rgb: '210,180,140'},
        {name: 'BrulyWood', describe: '结实的树', hex: '#DEB887', rgb: '222,184,135'},
        {name: 'Bisque', describe: '浓汤,乳脂,番茄等', hex: '#FFE4C4', rgb: '255,228,196'},
        {name: 'DarkOrange', describe: '深橙色', hex: '#FF8C00', rgb: '255,140,0'},
        {name: 'Linen', describe: '亚麻布', hex: '#FAF0E6', rgb: '250,240,230'},
        {name: 'Peru', describe: '秘鲁', hex: '#CD853F', rgb: '205,133,63'},
        {name: 'PeachPuff', describe: '桃色', hex: '#FFDAB9', rgb: '255,218,185'},
        {name: 'SandyBrown', describe: '沙棕色', hex: '#F4A460', rgb: '244,164,96'},
        {name: 'Chocolate', describe: '巧克力', hex: '#D2691E', rgb: '210,105,30'},
        {name: 'SaddleBrown', describe: '马鞍棕色', hex: '#8B4513', rgb: '139,69,19'},
        {name: 'SeaShell', describe: '海贝壳', hex: '#FFF5EE', rgb: '255,245,238'},
        {name: 'Sienna', describe: '黄土赭色', hex: '#A0522D', rgb: '160,82,45'},
        {name: 'LightSalmon', describe: '浅鲜肉(鲑)色', hex: '#FFA07A', rgb: '255,160,122'},
        {name: 'Coral', describe: '珊瑚', hex: '#FF7F50', rgb: '255,127,80'},
        {name: 'OrangeRed', describe: '橙红色', hex: '#FF4500', rgb: '255,69,0'},
        {name: 'DarkSalmon', describe: '深鲜肉(鲑)色', hex: '#E9967A', rgb: '233,150,122'},
        {name: 'Tomato', describe: '番茄', hex: '#FF6347', rgb: '255,99,71'},
        {name: 'MistyRose', describe: '薄雾玫瑰', hex: '#FFE4E1', rgb: '255,228,225'},
        {name: 'Salmon', describe: '鲜肉(鲑)色', hex: '#FA8072', rgb: '250,128,114'},
        {name: 'Snow', describe: '雪', hex: '#FFFAFA', rgb: '255,250,250'},
        {name: 'LightCoral', describe: '淡珊瑚色', hex: '#F08080', rgb: '240,128,128'},
        {name: 'RosyBrown', describe: '玫瑰棕色', hex: '#BC8F8F', rgb: '188,143,143'},
        {name: 'IndianRed', describe: '印度红', hex: '#CD5C5C', rgb: '205,92,92'},
        {name: 'Red', describe: '纯红', hex: '#FF0000', rgb: '255,0,0'},
        {name: 'Brown', describe: '棕色', hex: '#A52A2A', rgb: '165,42,42'},
        {name: 'FireBrick', describe: '耐火砖', hex: '#B22222', rgb: '178,34,34'},
        {name: 'DarkRed', describe: '深红色', hex: '#8B0000', rgb: '139,0,0'},
        {name: 'Maroon', describe: '栗色', hex: '#800000', rgb: '128,0,0'},
        {name: 'White', describe: '纯白', hex: '#FFFFFF', rgb: '255,255,255'},
        {name: 'WhiteSmoke', describe: '白烟', hex: '#F5F5F5', rgb: '245,245,245'},
        {name: 'Gainsboro', describe: '亮灰色', hex: '#DCDCDC', rgb: '220,220,220'},
        {name: 'LightGrey', describe: '浅灰色', hex: '#D3D3D3', rgb: '211,211,211'},
        {name: 'Silver', describe: '银白色', hex: '#C0C0C0', rgb: '192,192,192'},
        {name: 'DarkGray', describe: '深灰色', hex: '#A9A9A9', rgb: '169,169,169'},
        {name: 'Gray', describe: '灰色', hex: '#808080', rgb: '128,128,128'},
        {name: 'DimGray', describe: '暗淡的灰色', hex: '#696969', rgb: '105,105,105'},
        {name: 'Black', describe: '纯黑', hex: '#000000', rgb: '0,0,0'}
      ]
    }
  },
  methods: {
    tableCellStyle (row) {
      let style = {'text-align': 'center'}
      if (row.columnIndex === 0) {
        style['background-color'] = row.row.hex
      }
      return style
    },
    rgbToHex () {
      let strHex = '#'
      let colorArr = this.inp.split(',')
      for (let i = 0; i < colorArr.length; i++) {
        let hex = Number(colorArr[i]).toString(16)
        if (hex.length === 1) {
          hex = '0' + hex
        }
        strHex += hex
      }
      this.res = strHex
      this.colorPr['background-color'] = strHex
    },
    hexToRgb () {
      let first = this.inp.substr(1, 2)
      let second = this.inp.substr(3, 2)
      let third = this.inp.substr(5, 2)
      this.res = 'rgb(' + parseInt('0x' + first) + ',' +
        parseInt('0x' + second) + ',' +
        parseInt('0x' + third) + ')'
      this.colorPr['background-color'] = this.res
    },
    clearInfo () {
      this.inp = null
      this.res = null
      this.colorPr['background-color'] = 'white'
    }
  }
}
</script>

<style scoped>
  .color-preview{
    border: 1px solid #cccccc;
    width: 100px;
    height: 92px;
  }
</style>
