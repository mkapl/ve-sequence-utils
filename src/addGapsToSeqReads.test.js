const addGapsToSeqReads = require("./addGapsToSeqReads.js");

describe("add gaps into sequencing reads before starting bp pos and from own deletions & other seq reads' insertions", function() {
  it("seq reads with gaps", function() {
    const refSeq = { name: "ref seq", sequence: "GGGAGACACC" };
    const seqReads = [
      { name: "r1", seq: "GATTGAC", pos: 3, cigar: "2M2I3M" },
      { name: "r2", seq: "GAGAGAC", pos: 3, cigar: "7M" },
      { name: "r3", seq: "GGGAGATCAC", pos: 1, cigar: "6M1I3M" },
      { name: "r4", seq: "GATTGAC", pos: 3, cigar: "2M2I3M" },
      { name: "r5", seq: "GAGC", pos: 3, cigar: "3M1D1M" },
      { name: "r6", seq: "GAGCTTACC", pos: 3, cigar: "3M1D1M2I3M" },
      { name: "r7", seq: "GGCATTTCC", pos: 2, cigar: "2M3D2M3I2M" },
      { name: "r8", seq: "GGATTGACATT", pos: 1, cigar: "1D3M2I4M2I2D" },
      { name: "r9", seq: "GGTTTGACCTTT", pos: 1, cigar: "2M3I2D1M2D3M3I" }
    ];
    const result = addGapsToSeqReads(refSeq, seqReads);
    expect(result).toEqual([
      // ref seq first
      { name: "ref seq", sequence: "GG---GA--GA-C--A---CC---" },
      // then seq reads
      { name: "r1", sequence: "-----GATTGA-C-----------" },
      { name: "r2", sequence: "-----GA--GA-G--A---C----" },
      { name: "r3", sequence: "GG---GA--GATC--A---C----" },
      { name: "r4", sequence: "-----GATTGA-C-----------" },
      { name: "r5", sequence: "-----GA--G--C-----------" },
      { name: "r6", sequence: "-----GA--G--CTTA---CC---" },
      { name: "r7", sequence: "-G---G------C--ATTTCC---" },
      { name: "r8", sequence: "-G---GATTGA-C--A-TT-----" },
      { name: "r9", sequence: "GGTTT----G-----A---CCTTT" }

      // "GGTTT--G--ACCTTT"

      // "--GATTGA-C",
      // "--GA--GA-G--A---C",
      // "GGGA--GATC--A---C",
      // "--GATTGA-C",
      // "--GA--G--C",
      // "--GA--G--CTTA---CC",
      // "-GG------C--ATTTCC",
      // "-GGATTGA-C--A-TT--"
    ]);
  });
  // it("seq reads with gaps", function() {
  //   const refSeq = "gcggccgcgcttccatccgggtatgatcgactgtgaagctatctaacaacggcatttagccacctccggtaatttttttaaaaattttctgaactctttcttcccaggcgagtctgagtatatgaaagacgcgcatttgttatcatcagcgctcaacgggtgtgcttcccgttctgatgagtccgtgaggacgaaagcgcctctacaaataattttgtttaattcgccagaaaacatttacctaaggdggtgtrtatgccaatcaaccatttcaaacgccgcttacattcaggagaaccgcagattggtctgtggctgggtctggcggatgcgtattgtgcggaactggcggcaaatgcgggctttgattggctgcttattgatggcgagcacgccccgaatgacctgcgtggtatgctggcacaacttcaggcggtggcaccgtatccgtcacaggcggtgattcgcccagtgattggcgataccgccctgattaaacaggtgctggacattggtgcccagaccctgctggtgccgatggtggaaaccgccgaacaggcacgccaactggtgaaagcgatgcactatccgccgaaaggcattcgtggtgtgggcagtgccctggctcgtgcgagccgctggaacaccctgccaggctatctggaccacgccgatgaacagatgtgcctgctggtccagattgaaaacaaagaagggctggcgaacctggatgaaatcgtggcggtggaaggcgtggatggcgtgtttattggtccagcggacctgagtgcggcgatgggtcaccgtggcaacccaggtcatcctgaagttcaggcagcgattgaagatgcgattgtccgtattggtaaagcgggcaaagcggcaggtattctgtcggcggatgagaaactggcacgccgctacattgaactgggtgcggcgtttgtggcggtgggcgtggataccaccgtgctgatgcgtggtctgcgtgaactggcgggtaagttcaaagataccgttgtggtgccgtctgcgggtggcggtgcgtattaagggtatcagatagtagtaagaastanggaggaaagatgagttacaccgtgggcacctatttggcagaacgcctggttcagattggtctgaaacatcatttcgccgtggcgggtgattacaacctggtgctgttagataacctcctgctgaacaagaatatggaacaggtgtattgctgtaacgagttgaactgcggattttccgccgaaggttacgcccgtgccaaaggtgctgcggcagcggtggtcacctacagcgtgggtgccctgtcggcgtttgatgcgattggcggtgcatatgccgaaaacctgccagtgattctgattagcggtgccccgaacaataacgaccacgccgctggtcatgtgctccatcacgccctgggtaaaaccgactaccattatcaactggaaatggcgaagaacatcaccgcagcggcagaagcgatttacaccccagaagaggcaccagcgaagattgaccatgttatcaaaaccgccctgcgtgaaaagaaaccagtgtatctggaaatcgcctgtaacatcgccagtatgccgtgtgcggcaccaggtcctgcgtcggcactgttcaacgatgaagcgtcggatgaagcgagcctgaatgcggcagtggaagaaaccctgaagtttatcgccaaccgtgataaagtggcagtgctggtgggcagcaaactgcgtgctgcaggtgctgaagaggcagcggtgaagtttgccgatgcccttggtggtgccgtagcgacgatggcggcagcaaaatccttctttcctgaagaaaacccgcattacatcggcaccagttggggcgaagtgagttatcctggcgtggagaaaacgatgaaagaagcggatgcggtgattgccctggcaccagtgttcaacgattacagcaccacgggctggaccgacattccagacccgaagaaactggtgctggcggaacctcgtagcgtcgtggtgaacggcattcgttttccgagcgttcatctgaaagattacctgacccgtctggcacagaaagtgagcaagaaaacgggtgccctggatttcttcaaaagcctgaatgcgggcgaactgaagaaagcggcaccagcggacccgtcagcaccgctggtgaacgccgaaatcgcccgtcaagtggaagccctgctgaccccgaataccaccgtgattgcagaaacgggtgattcctggttcaacgcccagcgtatgaaactgccgaacggtgcccgtgtggagtatgaaatgcagtggggtcacatcggctggagcgtgccagccgcctttggttatgccgtgggtgccccagaacgccgtaacatcctgatggtgggcgatggcagttttcaactgaccgcccaggaagtggcacagatggttcgcctgaaactgcctgttatcatcttcctgattaacaactacggctacaccattgaagttatgattcacgacggcccatacaataacatcaagaactgggattatgcgggtctgatggaagtgttcaatggcaacggtggctatgacagcggtgcgggcaaaggcttgaaagcgaaaacgggcggtgaactggcggaagccatcaaagtcgccctggcgaataccgacggtccgaccctgattgaatgcttcatcggtcgtgaagattgcaccgaagaactggtgaaatggggcaaacgggtggcagcggcgaatagccgtaaaccagtgaataaactgctgtaagtygtgaaaaaaacasacatattasggaggtaaaaatgaaaatcaccgtgctgggttgtggtgctctgggtcaactgtggctgaccgccctgtgtaaacagggtcacgaagttcagggttggctgcgtgtgccgcagccgtattgctctgtgaatctggtggaaaccgatggcagcattttcaacgaaagcctgacggcgaacgaccctgatttcctggcgaccagcgatttactgctggtgaccctgaaagcgtggcaggtgagcgatgcggtgaaaagcctggcgtctaccctgccagtgaccacgccgattctgctgattcataacggtatgggcaccattgaagagttacagaacattcagcaaccactgctgatgggcaccacgacccacgcagcccgccgtgatggcaatgtgattattcacgttgccaatggcattacccacattggtccagcccgccagcaggatggcgattattcctatctggcggacattctccagaccgttctgcccgatgttgcctggcacaataacatccgtgcggaactgtggcgtaaactggcggtgaactgcgttatcaacccgctgaccgccatttggaactgcccgaacggcgaactgcgtcaccatccgcaggagattatgcagatttgcgaagaggtggcggcagtgattgagcgtgaaggtcatcacacctcggcggaagacctgcgtgattatgtgatgcaggttattgatgccaccgccgaaaacatcagcagtatgcttcaggacattcgtgccctgcgtcataccgaaatagattacatcaacggctttctgttgcgtcgtgcccgtgctcacggcattgcggtgcctgaaaacacccgcctgtttgaaatggtgaagcgtaaggaaagcgaatacgaacgcatcggcacgggtctgcctcgtccgtggtaattcagccaaaaaacttaagaccgccggtcttgtccactaccttgcagtaatgcggtggacaggatcggcggttttcttttctcttctcaatacaaatgaaagtacatagaaattactcggtaccaaattccagaaaagaggcctcccgaaaggggggccttttttcgttttggtcctcataggcaatacgatcgcatgtccgttctaccctggacttacagttgtcggctgaaagcgaaacctgataaaacagaatttgcctggcggcagtagcgcggtggtcccacctgaccccatgccgaactcagaagtgaaacgccgtagcgccgatggtagtgtggggtctccccatgcgagagtagggaactgccaggcatcaaataaaacgaaagctcagtcgaaagactgggccttcctgcaggtcgttttatctgttgtttgtcggtgaacgctctcctgagtaggacaaatccgccgggagcggatttgaacgttgcgaagcaacggcccggagggtggcgggcaggacgcccgccataaactgccaggcatcaaattaagcagaaggccatcctgacggatggcctttttgcgtttctacaaactcttttgtttatttttctaaatacattcaaatatgtatccgctcatgagacaataaccctgataaatgcttcaataatattgaaaaaggaagagtatgagtattcaacatttccgtgtcgcccttattcccttttttgcggcattttgccttcctgtttttgctcacccagaaacgctggtgaaagtaaaagatgctgaagatcagttgggtgcacgagtgggttacatcgaactggatctcaacagcggtaagatccttgagagttttcgccccgaagaacgttttccaatgatgagcacttttaaagttctgctatgtggcgcggtattatcccgtgttgacgccgggcaagagcaactcggtcgccgcatacactattctcagaatgacttggttgagtactcaccagtcacagaaaagcatcttacggatggcatgacagtaagagaattatgcagtgctgccataaccatgagtgataacactgcggccaacttacttctgacaacgatcggaggaccgaaggagctaaccgcttttttgcacaacatgggggatcatgtaactcgccttgatcgttgggaaccggagctgaatgaagccataccaaacgacgagcgtgacaccacgatgcctgtagcaatggcaacaacgttgcgcaaactattaactggcgaactacttactctagcttcccggcaacaattaatagactggatggaggcggataaagttgcaggaccacttctgcgctcggcccttccggctggctggtttattgctgataaatctggagccggtgagcgtgggtctcgcggtatcattgcagcactggggccagatggtaagccctcccgtatcgtagttatctacacgacggggagtcaggcaactatggatgaacgaaatagacagatcgctgagataggtgcctcactgattaagcattggtaactgtcagaccaagtttactcatatatactttagattgatttaaaacttcatttttaatttaaaaggatctaggtgaagatcctttttgataatctcatgaccaaaatcccttaacgtgagttttcgttccactgagcgtcagaccccgtagaaaagatcaaaggatcttcttgagatcctttttttctgcgcgtaatctgctgcttgcaaacaaaaaaaccaccgctaccagcggtggtttgtttgccggatcaagagctaccaactctttttccgaaggtaactggcttcagcagagcgcagataccaaatactgtccttctagtgtagccgtagttaggccaccacttcaagaactctgtagcaccgcctacatacctcgctctgctaatcctgttaccagtggctgctgccagtggcgataagtcgtgtcttaccgggttggactcaagacgatagttaccggataaggcgcagcggtcgggctgaacggggggttcgtgcacacagcccagcttggagcgaacgacctacaccgaactgagatacctacagcgtgagctatgagaaagcgccacgcttcccgaagggagaaaggcggacaggtatccggtaagcggcagggtcggaacaggagagcgcacgagggagcttccagggggaaacgcctggtatctttatagtcctgtcgggtttcgccacctctgacttgagcgtcgatttttgtgatgctcgtcaggggggcggagcctatggaaaaacgccagcaacgcggcctttttacggttcctggccttttgctggccttttgctcacatgttctttcctgcgttatcccctgattctgtggataaccgtattaccgcctttgagtgagctgataccgctcgccgcagccgaacgaccgagcgcagcgagtcagtgagcgaggaagcggaagagcgcctgatgcggtattttctccttacgcatctgtgcggtatttcacaccgcatatggtgcactctcagtacaatctgctctgatgccgcatagttaagccagtatacactccgctatcgctacgtgactgggtcatggctgcgccccgacacccgccaacacccgctgacgcgccctgacgggcttgtctgctcccggcatccgcttacagacaagctgtgaccgtctccgggagctgcatgtgtcagaggttttcaccgtcatcaccgaaacgcgcgaggcagcagatcaattcgcgcgcgaaggcgaagcggcatgcataatgtgcctgtcaaatggacgaagcagggattctgcaaaccctatgctactccgtcaagccgtcaattgtctgattcgttaccaattatgacaacttgacggctacatcattcactttttcttcacaaccggcacggaactcgctcgggctggccccggtgcattttttaaatacccgcgagaaatagagttgatcgtcaaaaccaacattgcgaccgacggtggcgataggcatccgggtggtgctcaaaagcagcttcgcctggctgatacgttggtcctcgcgccagcttaagacgctaatccctaactgctggcggaaaagatgtgacagacgcgacggcgacaagcaaacatgctgtgcgacgctggcgatatcaaaattgctgtctgccaggtgatcgctgatgtactgacaagcctcgcgtacccgattatccatcggtggatggagcgactcgttaatcgcttccatgcgccgcagtaacaattgctcaagcagatttatcgccagcagctccgaatagcgcccttccccttgcccggcgttaatgatttgcccaaacaggtcgctgaaatgcggctggtgcgcttcatccgggcgaaagaaccccgtattggcaaatattgacggccagttaagccattcatgccagtaggcgcgcggacgaaagtaaacccactggtgataccattcgcgagcctccggatgacgaccgtagtgatgaatctctcctggcgggaacagcaaaatatcacccggtcggcaaacaaattctcgtccctgatttttcaccaccccctgaccgcgaatggtgagattgagaatataacctttcattcccagcggtcggtcgataaaaaaatcgagataaccgttggcctcaatcggcgttaaacccgccaccagatgggcattaaacgagtatcccggcagcaggggatcattttgcgcttcagccatacttttcatactcccgccattcagag";
  //   const seqReads = [
  //   // { name: '1lib573',
  //   // seq: 'NNNNNNNNNNNNNNNTNNNCNNNNNCCGGTNATTTTTTTAAANNTTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATANGAAAGANGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGTGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCATATTGGTCTGTGGCTGGGTCTGGCGGATGCATATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCANGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCNCCCAGTGATTGGCGATACCCCCCTGATTAAACAGGTGCTGGANATTGGAGCNCANACCCTGCTGGTGCCGATGGNGGAAACCNCCNAACAGGCACGCCAACTGGTGAAAGCGATGCACTATCCGCCGAAAGGCATTCNTGGTGNGAGCAATGNCCTGGCNCGTGCGAAACGCTGGAA',
  //   // pos: 41,
  //   // cigar: '604M' },
  //   { name: '4lib573',
  //   seq: 'NNNNNNNNNNNNNNNNNNNCTCCGGNNNTTTTTTANNATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGGGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCGCCCAGTGATTGGCGATACCGCCCTGATTAAACAGGTGCTGGACATTGGTGCCCAGACCCTGCTTGTGCCGATGGTGGAAACCGCCGAACAGGCACGCCAACTGGTTAAAGCGATGCACTATCCGCCGAAAGGCATTCGTGGTGTGGGCAGTGCCCTGGCTCGTGCGAGCCGCTGGAACACCCTGCCAGGCTATCTGGACCACGCCGATGAACAGATGTGCCTGCTGGTCCAGATTGAAAACAAAGAAGGGCTGGCGAACCTGGATGAAATCGTGGCGGTGGAAGGCGTGGATGGCGTGTTTATTGGTCCAGCGGACCTGAGTGCGGCGATGGGTCACCGTGGCAACCCAGGTCATCCTGAAGTTCAGGCAGCGATTGAAGATGCGATTGTCCGTATTGGTAAAGCGGGCAAAGCGGCAGGTATTCTGTCGGCGGATGANAAACTGGCACGCCGCTACATTGAACTGGGTGCGGCGTTTGTGGCGGTGGGCGTGGATACCACCGTGCTGATGCGTGGTCTGCGTGAACTGNCGGGTAAGTTCAAAGATACCGTTGTGGTGCCGTCTGCGGGTGGCGGTGCGTATTAANGGTATCANATANTANTNAGAANTACGGGAGNNAGATGAGTTNNNNCGGTGGGNNCCTANTTNGGCNNNACNNCNGGGTNNNAATTNNNNNNGAAACNNNN',
  //   pos: 45,
  //   cigar: '34M2D1020M1I11M1I23M2I16M' },
  //   { name: '5lib573',
  //   seq: 'GNNNNNNNNNNNNNNNNNNNNCTCCGGNNNTTTTTTNNNATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGTGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCGCCCAGTGATTGGCGATACCGCCCTGATTAAACAGGTGCTGGACATTGGTGCCCAGACCCTGCTGGTGCCGATGGTGGAAACCGCCGAACAGGCACGCCAACTTGTGAAAGCGATGCACTATCCGCCGAAAGGCATTCGTGGTGTGGGCAGTGCCCTGGCTCGTGCGAGCCGCTGGAACACCCTGCCATGCTATCTGGACCACGCCGATGAACAGATGTGCCTGCTGGTCCAGATTGAAAACAAAGAAGGGCTGGCGAACCTGGATGAAATCGTGGCGGTGGAAGGCGTGGATGGCGTGTTTATTGGTCCAGCGGACCTGAGTGCGGCGATGGGTCACCGTGGCAACCCAGGTCATCCTGAAGTTCAGGCAGCGATTGAAGATGCGATTGTCCGTATTGGTAAAGCGGGCAAAGCGGCAGGTATTCTGTCGGCGGATGAGAAACTGGCACGCCGCTACATTTAACTGGGTGCGGCGTTTGTGGCGGTGGGCGTGNATACCACCGTGCTGAGNNNNNNNNNNNNNNNNNNNNCTCCGGNNNTTTTTTNNNATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAATCGNNNNGT',
  //   pos: 43,
  //   cigar: '36M2D917M3I17M7I2M1I6M5I4M1D6M12I8M' },
  //   // { name: '9lib578',
  //   // seq: 'NTGTAAGTCGTGAAAAAANCNNNCATATTNCGGAGGTAAAAATGAAAATCACCGTGCTGGGTNGNGGTGNTCTGGGTCAACTGTNGCTGACCGCCCTGTGTAAACAGGGTCACGAAGTTCAGGGTTGGCTGCGTGTGCCGCAGCCNTATTGCTCTGTGAATCTGGTGGAAACCGATGGCAGCATTTTCAACGAAAGCCTGACGGCGAACGACCCTGATTTCCTGGCGACCAGCGATTTACTGCTGGTGACCNTGAAAGCGTGGCAGGTGAGCGATGCGGTGAAAAGCCTGGCGTCTACCCTGCCAGTGACCACGCCGATTCTGCTGATTCATAACGGTATGGGCACCATTGAAGAGTTACAGAACATTCAGCAACCACTGCTGATGGGCACCACGACCCACGCAGCCCGCCGTGATGGCAATGTGATTATTCACGTTGCCAATGGCATTACCCACATTGGTCCAGCCCGCCAGCAGGATGGCGATTATTCCTATCTGGCGGACATTCTCCAGACCGTTCTGCCCGATGTTGCCTGGCACAATAACATCCGTGCGGAACTGTGGCGTAAACTGGCGGTGAACTGCGTTATCAACCCGCTGACCGCCATTTGGAACTGCCCGAACGGCGAACTGCGTCACCATCCGCAGGAGATTATGCAGATTTGCGAAGAGGTGGCGGCAGTGATTGAGCGTGAAGGTCATCACACCTCGGCGGAAGACCTGCGTGATTATGTGATGCAGGTTATTGATGCCACCGCCGAAAACATCAGCAGTATGCTTCAGGACATTCGTGCCCTGCGTCATACCGAAATAGATTACATCAACGGCTTTCTGTTGCGTCGTGCCCGTGCTCACGGCATTGCGGTGCCTGAAAACACCCGCCTGTTTGAAATGGTGAAGCGTAAGGAAAGCGAATACGAACGCATCGGCACGGGTCTGCCTCGTCCGTGGTAATTCAGCCAAAAAACTTAAGACCGCCGGTCTTGTCCACTACCTTGCAGTAATGCGGTGGACAGGATCGGCGGTTTTCNTTTCTCTTCTCAATACAAATGAAAGTACATAGAAATTACTCGGTACCAAATTCCAGAAAAGAGCNNNNNNNNNNNNNNNNNNN',
  //   // pos: 2790,
  //   // cigar: '1113M' }
  //   ];
  //   const result = addGapsToSeqReads(refSeq, seqReads);
  //   expect(result).toEqual([
  //     "",
  //     "",
  //     ""
  //   ]);
  // });
});