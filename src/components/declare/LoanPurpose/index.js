import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { formatDataObject } from "../../../common";
import { checkBoxRequired } from "../../../yupUtils";

const validationSchema = yup.object().shape({
  loanPurpose: yup.object()
    .shape({
      "Vay mua ô tô": yup.object().shape({
        purpose: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return checkBoxRequired("Vui lòng chọn ít nhất một ô")
        }),
        description: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return yup.object().shape({
              content: yup.string().required("Đây là trường bắt buộc")
            })
        }),
      }),
      "Vay phục vụ hoạt động sản xuất kinh doanh": yup.object().shape({
        purpose: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return checkBoxRequired("Vui lòng chọn ít nhất một ô")
        }),
        description: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return yup.object().shape({
              content: yup.string().required("Đây là trường bắt buộc")
            })
        }),
      }),
      "Vay mua bất động sản": yup.object().shape({
        purpose: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return checkBoxRequired("Vui lòng chọn ít nhất một ô")
        }),
        type: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return yup.object().shape({
              option: checkBoxRequired("Vui lòng chọn ít nhất một ô"),
              optionOther: yup.string().when("option", (apply) => {
                if (apply[0].other)
                  return yup.string().required("Đây là trường bắt buộc")
              })
            })
        }),
        purposeOther: yup.string().when("purpose", (apply) => {
          if (apply[0].other)
            return yup.string().required("Vui lòng nhập mục đích khác")
        }),
        description: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return yup.object().shape({
              content: yup.string().required("Vui lòng nhập thông tin chi tiết mục đích vay")
            })
        }),
      }),
      "Vay xây nhà / sửa nhà": yup.object().shape({
        purpose: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return checkBoxRequired("Vui lòng chọn ít nhất một ô")
        }),
        purposeOther: yup.string().when("purpose", (apply) => {
          if (apply[0].other)
            return yup.string().required("Đây là trường bắt buộc")
        }),
        description: yup.object().when("index", (applyValidation) => {
          if (applyValidation[0])
            return yup.object().shape({
              content: yup.string().required("Đây là trường bắt buộc")
            })
        }),
      }),
      other: yup.object().shape({
        content: yup.string().when("index", (applyValidation) => {
          if (applyValidation[0])
            return yup.string().required("Vui lòng nhập mục đích vay khác")
        })
      })
    }),
  priceLoan: yup.string().required("Đây là trường bắt buộc"),
  timeLoan: yup.string().required("Đây là trường bắt buộc"),
  // timeLoanCurrent: yup.string().required("Vui lòng nhật số tiền cần vay"),// Vaidate số
  debtPaymentMethod: checkBoxRequired("Vui lòng chọn ít nhất một ô"),
  debtPaymentMethodOther: yup.string().when("debtPaymentMethod", (applyValidation, schema) => {
    if (applyValidation[0].other)
      return schema.required('Đây là trường bắt buộc')
  }),
})


const LoanPurpose = (props) => {
  const loanPurposeInit = JSON.parse(sessionStorage.getItem("loanPurposeInit"))
  let initialValues = {}
  if (loanPurposeInit) {
    initialValues = loanPurposeInit
  } else {
    initialValues = {
      selectLoanPurpose: "other",
      loanPurpose: {
        "Vay mua ô tô": {
          index: false,
          purpose: {
            "Mua xe ô tô mới": false,
            "Mua xe ô tô đã qua sử dụng": false,
            "Hoàn vốn / Bù đắp mua xe ô tô": false,
          },
          description: {
            title: "Tên chủng loại xe (hiệu xe - dòng xe - năm sản xuất)",
            content: ""
          },
        },
        "Vay phục vụ hoạt động sản xuất kinh doanh": {
          index: false,
          purpose: {
            "Vay đầu tư TSCĐ": false,
            "Vay bổ sung vốn / mở rộng / phát triển kinh doanh": false,
            "Vay bổ sung vốn lưu động theo hạn mức": false,
            "Vay thấu chi Tài khoản thanh toán HKD": false,
          },
          description: {
            title: "Ghi chi tiết cụ thể mục đích vay",
            content: ""
          },
        },
        "Vay mua bất động sản": {
          index: false,
          purpose: {
            "Để sử dụng": false,
            "Để kinh doanh": false,
            "other": false,
          },
          purposeOther: "",
          type: {
            title: "Loại BĐS",
            option: {
              "Chung cư": false,
              "Nhà đất": false,
              "Đất": false,
              "BĐS chưa có giấy tờ chứng minh quyền sở hữu, sử dụng": false,
              "BĐS có giấy tờ chứng minh quyền sở hữu, sử dụng": false,
              "other": false,
            },
            optionOther: "",
          },
          description: {
            title: "Ghi chi tiết cụ thể mục đích vay",
            content: ""
          },
        },
        "Vay xây nhà / sửa nhà": {
          index: false,
          purpose: {
            "Để sử dụng": false,
            "Để kinh doanh": false,
            "other": false,
          },
          purposeOther: "",
          description: {
            title: "Địa chỉ",
            content: ""
          },
        },
        "other": {
          index: true,
          content: ""
        },
      },
      priceLoan: "",
      timeLoan: "3",
      timeLoanCurrent: "",
      debtPaymentMethod: {
        "Trả gốc đều hàng tháng, lãi trả hàng tháng": false,
        "Trả gốc, lãi đều hàng tháng (Niên kim)": false,
        "Trả gốc cuối kỳ, lãi hàng tháng": false,
        "Trả gốc tăng dần, lãi giảm dần": false,
        "other": false,
      },
      debtPaymentMethodOther: "",
      otherSuggestions: "",
    }
  }

  const onSubmit = (values) => {
    sessionStorage.setItem('loanPurposeInit', JSON.stringify(values))
    let loanPurpose = ""
    Object.keys(values.loanPurpose).filter(key => values.loanPurpose[key].index).map((key) => {
      if (key !== "other") {
        let purpose = ""
        Object.keys(values.loanPurpose[key].purpose).filter(keySub => values.loanPurpose[key].purpose[keySub]).map((keySub) => {
          purpose += (keySub === "other" ? values.loanPurpose[key].purposeOther : keySub) + "|"
        })
        purpose = purpose.slice(0, -1)

        let type = ""
        if ("type" in values.loanPurpose[key]) {
          Object.keys(values.loanPurpose[key].type.option).filter(keySub => values.loanPurpose[key].type.option[keySub]).map((keySub) => {
            type += (keySub === "other" ? values.loanPurpose[key].type.optionOther : keySub) + "|"
          })
          type = type.slice(0, -1)
        }

        loanPurpose += key + "-" + purpose + "-" + (type ? type + "-" : "") + values.loanPurpose[key].description.content + "||"
      } else {
        loanPurpose += "Vay khác" + "-" + values.loanPurpose[key].content + "||"
      }
    })
    loanPurpose = loanPurpose.slice(0, -2)

    const loanPurposeInfo = {
      loanPurpose: loanPurpose,
      priceLoan: values.priceLoan,
      timeLoan: values.timeLoan,
      timeLoanCurrent: values.timeLoanCurrent,
      debtPaymentMethod: formatDataObject(values.debtPaymentMethod, values.debtPaymentMethodOther),
      otherSuggestions: values.otherSuggestions,
    }
    sessionStorage.setItem('loanPurpose', JSON.stringify(loanPurposeInfo))
    props.changeStep(props.step + 1)
  }

  return (
    <>
      <Paper>
        <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
          <Typography fontSize='1.2rem' fontWeight='600'>Mục đích vay vốn</Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, touched, errors, handleChange, handleBlur, setFieldValue }) => (
            <Form>
              <Box padding='1rem'>
                <Grid container spacing={2}>
                  {/* Mục đích */}
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }}>
                      <RadioGroup
                        name="selectLoanPurpose"
                        defaultValue='other'
                        onChange={(event) => {
                          handleChange(event)
                          setFieldValue(`loanPurpose.${event.target.value}.index`, true)
                        }}
                      >
                        {
                          Object.keys(values.loanPurpose).map((key) => (
                            <React.Fragment key={key}>
                              {
                                key !== "other" ?
                                  <>
                                    <FormControlLabel
                                      label={key}
                                      value={key}
                                      control={<Radio />}
                                      onChange={() => {
                                        Object.keys(values.loanPurpose).map((keySub) => {
                                          setFieldValue(`loanPurpose.${keySub}.index`, false)
                                        })
                                      }}
                                    />
                                    {
                                      key === values.selectLoanPurpose ? <Box>
                                        <Typography component='ul'>
                                          <Typography component='li' key="purpose">
                                            <Typography>
                                              Mục đích
                                              <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormGroup>
                                              {
                                                Object.keys(values.loanPurpose[key].purpose).map((keySub) => (
                                                  <FormControlLabel
                                                    key={keySub}
                                                    control={<Checkbox name={`loanPurpose.${key}.purpose.${keySub}`} checked={values.loanPurpose[key].purpose[keySub]} onChange={handleChange} />}
                                                    label={keySub === 'other' ? 'Khác (Ghi rõ)' : keySub}
                                                  />
                                                ))
                                              }
                                            </FormGroup>
                                            {
                                              values.loanPurpose[key].purpose?.other ? <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                  variant="standard"
                                                  placeholder="Vui lòng nhập thông tin"
                                                  name={`loanPurpose.${key}.purposeOther`}
                                                  value={values.loanPurpose[key].purposeOther}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  error={touched.loanPurpose?.[key]?.purposeOther && Boolean(errors.loanPurpose?.[key]?.purposeOther)}
                                                  helperText={touched.loanPurpose?.[key]?.purposeOther && errors.loanPurpose?.[key]?.purposeOther}
                                                  sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                      margin: 0,
                                                      marginTop: '4px'
                                                    }
                                                  }}
                                                /></FormControl> : null
                                            }
                                          </Typography>
                                          <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                            {errors.loanPurpose?.[key]?.purpose && touched.loanPurpose?.[key]?.purpose && errors.loanPurpose?.[key]?.purpose}
                                          </FormHelperText>
                                          {
                                            "type" in values.loanPurpose[key] ?
                                              <Typography component='li' key="type">
                                                <Typography>
                                                  {values.loanPurpose[key].type.title}
                                                  <Typography component='span' color='#f44336'> *</Typography>
                                                </Typography>
                                                <FormGroup>
                                                  {
                                                    Object.keys(values.loanPurpose[key].type.option).map((keyOption) => (
                                                      <FormControlLabel
                                                        key={keyOption}
                                                        control={<Checkbox name={`loanPurpose.${key}.type.option.${keyOption}`} checked={values.loanPurpose[key].type.option[keyOption]} onChange={handleChange} />}
                                                        label={keyOption === 'other' ? 'Khác (Ghi rõ)' : keyOption}
                                                      />
                                                    ))
                                                  }
                                                  {errors.loanPurpose?.[key] && errors.loanPurpose?.[key]?.type?.option && touched.loanPurpose?.[key]?.type?.option && (
                                                    <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                                      {errors.loanPurpose?.[key]?.type?.option}
                                                    </FormHelperText>
                                                  )}
                                                  {
                                                    values.loanPurpose[key].type.option.other ?
                                                      <FormControl sx={{ width: '100%' }}>
                                                        <TextField
                                                          variant="standard"
                                                          placeholder="Vui lòng nhập thông tin"
                                                          name={`loanPurpose.${key}.type.optionOther`}
                                                          value={values.loanPurpose[key].type.optionOther}
                                                          onChange={handleChange}
                                                          onBlur={handleBlur}
                                                          error={touched.loanPurpose?.[key]?.type?.optionOther && Boolean(errors.loanPurpose?.[key]?.type?.optionOther)}
                                                          helperText={touched.loanPurpose?.[key]?.type?.optionOther && errors.loanPurpose?.[key]?.type?.optionOther}
                                                          sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                              margin: 0,
                                                              marginTop: '4px'
                                                            }
                                                          }}
                                                        />
                                                      </FormControl>
                                                      :
                                                      null
                                                  }
                                                </FormGroup>
                                              </Typography>
                                              : null
                                          }

                                          <Typography component='li' key="description">
                                            <Typography>
                                              {values.loanPurpose[key].description.title}
                                              <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormControl sx={{ width: '100%' }}>
                                              <TextField
                                                variant="standard"
                                                placeholder="Vui lòng nhập thông tin"
                                                name={`loanPurpose.${key}.description.content`}
                                                value={values.loanPurpose[key].description.content}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.loanPurpose?.[key]?.description?.content && Boolean(errors.loanPurpose?.[key]?.description?.content)}
                                                helperText={touched.loanPurpose?.[key]?.description?.content && errors.loanPurpose?.[key]?.description?.content}
                                                sx={{
                                                  '& .css-1wc848c-MuiFormHelperText-root': {
                                                    margin: 0,
                                                    marginTop: '4px'
                                                  }
                                                }}
                                              />
                                            </FormControl>
                                          </Typography>
                                        </Typography>
                                      </Box> : null
                                    }
                                  </>
                                  :
                                  <>
                                    <FormControlLabel
                                      key={key}
                                      value='other'
                                      control={<Radio />}
                                      label="Vay khác"
                                      onChange={() => {
                                        Object.keys(values.loanPurpose).map((keySub) => {
                                          setFieldValue(`loanPurpose.${keySub}.index`, false)
                                        })
                                      }}
                                    />
                                    {
                                      values.selectLoanPurpose === 'other' ?
                                        <FormControl sx={{ width: '100%' }}>
                                          <TextField
                                            multiline
                                            rows={4}
                                            placeholder='Vui lòng điền đủ thông tin về mục đích vay vốn'
                                            name="loanPurpose.other.content"
                                            value={values.loanPurpose.other.content}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.loanPurpose?.other?.content && Boolean(errors.loanPurpose?.other?.content)}
                                            helperText={touched.loanPurpose?.other?.content && errors.loanPurpose?.other?.content}
                                            sx={{
                                              '& .css-1wc848c-MuiFormHelperText-root': {
                                                margin: 0,
                                                marginTop: '4px'
                                              }
                                            }}
                                          />
                                        </FormControl>
                                        : null
                                    }

                                  </>
                              }
                            </React.Fragment>
                          ))
                        }
                      </RadioGroup>

                      {!Object.keys(values.loanPurpose).some((key) => !!errors.loanPurpose?.[key]) && (
                        <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                          {errors.loanPurpose && touched.loanPurpose && errors.loanPurpose}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  {/* Số tiền vay */}
                  <Grid item xs={6}>
                    <Typography>
                      Số tiền vay
                      <Typography component='span' color='#f44336'> *</Typography>
                    </Typography>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        variant="standard"
                        placeholder="Nhập số tiền"
                        name="priceLoan"
                        value={values.priceLoan}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.priceLoan && Boolean(errors.priceLoan)}
                        helperText={touched.priceLoan && errors.priceLoan}
                        sx={{
                          '& .css-1wc848c-MuiFormHelperText-root': {
                            margin: 0,
                            marginTop: '4px'
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>
                  {/* Thời hạn vay */}
                  <Grid item xs={6}>
                    <Typography>
                      Thời hạn vay (tháng)
                      <Typography component='span' color='#f44336'> *</Typography>
                    </Typography>
                    <FormControl variant="outlined" sx={{ width: '100%' }}>
                      <TextField
                        select
                        variant="standard"
                        id="select-time-loan"
                        name="timeLoan"
                        value={values.timeLoan}
                        onChange={handleChange}
                      >
                        <MenuItem value='3'>3</MenuItem>
                        <MenuItem value='6'>6</MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>
                  {/* Ân hạn gốc */}
                  <Grid item xs={6}>
                    <Typography>Ân hạn gốc (tháng)</Typography>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        variant="standard"
                        placeholder="Số tháng"
                        name="timeLoanCurrent"
                        value={values.timeLoanCurrent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.timeLoanCurrent && Boolean(errors.timeLoanCurrent)}
                        sx={{
                          '& .css-1wc848c-MuiFormHelperText-root': {
                            margin: 0,
                            marginTop: '4px'
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>
                  {/* Phương thức giải ngân */}
                  <Grid item xs={6}>
                    <Typography>
                      Phương thức giải ngân
                    </Typography>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        variant="standard"
                        disabled
                        value='Theo quy định của ngân hang VPBank'
                      />
                    </FormControl>
                  </Grid>
                  {/* Phương thức trả nợ */}
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }}>
                      <Typography component='label'>
                        Phương thức trả nợ
                        <Typography component='span' color='#f44336'> *</Typography>
                      </Typography>
                      <FormGroup>
                        {
                          Object.keys(values.debtPaymentMethod).map((key) => (
                            <FormControlLabel
                              key={key}
                              control={<Checkbox name={`debtPaymentMethod.${key}`} checked={values.debtPaymentMethod[key]} onChange={handleChange} />}
                              label={key === 'other' ? 'Khác (Ghi rõ)' : key}
                            />
                          ))
                        }
                      </FormGroup>
                      <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                        {errors.debtPaymentMethod && touched.debtPaymentMethod && errors.debtPaymentMethod}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {
                    values.debtPaymentMethod.other ? <Grid item xs={12}>
                      <FormControl sx={{ width: '100%' }}>
                        <TextField
                          variant="standard"
                          placeholder="Ghi rõ Phương thức trả nợ "
                          name="debtPaymentMethodOther"
                          value={values.debtPaymentMethodOther}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.debtPaymentMethodOther && Boolean(errors.debtPaymentMethodOther)}
                          helperText={touched.debtPaymentMethodOther && errors.debtPaymentMethodOther}
                          sx={{
                            '& .css-1wc848c-MuiFormHelperText-root': {
                              margin: 0,
                              marginTop: '4px'
                            }
                          }}
                        />
                      </FormControl>
                    </Grid> : null
                  }
                  {/* Đề xuât khác */}
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }}>
                      <Typography component='label'>
                        Đề xuất khác
                      </Typography>
                      <TextField
                        multiline
                        rows={5}
                        placeholder='Mô tả mục đích'
                        name="otherSuggestions"
                        value={values.otherSuggestions}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Grid>
                  {/* Nút điều khiển */}
                  <Grid item xs={12}>
                    <Stack direction='row' justifyContent='space-between'>
                      <Button
                        variant="contained"
                        onClick={() => props.changeStep(props.step - 1)}
                        sx={{
                          bgcolor: '#9e9e9e',
                          '&:hover': {
                            bgcolor: '#8c8c8c'
                          }
                        }}
                      >
                        Quay lại
                      </Button>

                      <Button variant="contained" type="submit">Tiếp tục</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default LoanPurpose;